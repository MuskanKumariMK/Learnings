using Confluent.Kafka;

namespace Logging
{
    public class KafkaConsumerService : BackgroundService
    {
        private readonly ILogger<KafkaConsumerService> _logger;

        public KafkaConsumerService(ILogger<KafkaConsumerService> logger)
        {
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var config = new ConsumerConfig
            {
                BootstrapServers = "kafka:9092",
                GroupId = "log-consumer",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
            consumer.Subscribe("logs");

            _logger.LogInformation("🧾 Kafka Log consumer started...");

            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    var cr = consumer.Consume(stoppingToken);
                    _logger.LogInformation($"📥 [{DateTime.Now}] {cr.Value}");
                }
                catch (ConsumeException e)
                {
                    _logger.LogError(e, "Kafka consume error");
                }
            }
        }
    }

}
