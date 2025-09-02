using System.Diagnostics;

namespace Common.Performance
{
     public static class PerformanceTester
     {
          public static void MeasureTime(Action action, string label = "Time taken")
          {
               var stopwatch = Stopwatch.StartNew();
               action();
               stopwatch.Stop();
               Console.WriteLine($"{label}: {stopwatch.Elapsed.TotalMilliseconds} ms");
          }

          public static void RunBenchmark(string title, Action action, int iterations = 1)
          {
               Console.WriteLine($"\n=== {title} ===");
               var stopwatch = Stopwatch.StartNew();

               for (int i = 0; i < iterations; i++)
               {
                    action();
               }

               stopwatch.Stop();
               Console.WriteLine($"{title} completed in: {stopwatch.Elapsed.TotalMilliseconds} ms");
          }
     }
}
