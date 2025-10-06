namespace SOLID.Services.Notification
{
     public class NotificationService : IEmailNotifier, ISmsNotifier
     {
          public void SendEmail(string to, string subject, string body)
          {
               Console.WriteLine($"Sending Email to: {to}, Subject: {subject}, Body: {body}");
          }

          public void SendSms(string to, string message)
          {
               Console.WriteLine($"Sending SMS to: {to}, Message: {message}");
          }
     }
}
