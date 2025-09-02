// See https://aka.ms/new-console-template for more information
using System.Diagnostics;
using Common.Models;
using Common.Performance;
using OCP.Use;

Console.WriteLine("Hello, World!");

// Number of iterations for performance testing
const int iterations = 100000000;

Console.WriteLine("\n--- Without OCP ---");

var badDiscount = new OCP.NotUse.Discount();
PerformanceTester.RunBenchmark("Without OCP", () =>
{
     badDiscount.CalculateDiscount(new Customer { Name = "Bob", Type = "Regular" }, 100);
     badDiscount.CalculateDiscount(new Customer { Name = "Alice", Type = "VIP" }, 100);
}, iterations);
var discountManager = new DiscountManager();
PerformanceTester.RunBenchmark("With OCP", () =>
{
     discountManager.CalculateDiscount(100, new RegularDiscount());
     discountManager.CalculateDiscount(100, new VIPDiscount());
     discountManager.CalculateDiscount(100, new PremiumDiscount()); // Extended
}, iterations);



Console.WriteLine("\n--- Without OCP ---");
var stopwatch = Stopwatch.StartNew();

var regularPriceBad = badDiscount.CalculateDiscount(new Customer { Name = "Bob", Type = "Regular" }, 100);
var vipPriceBad = badDiscount.CalculateDiscount(new Customer { Name = "Alice", Type = "VIP" }, 100);

Console.WriteLine($"Regular customer pays: {regularPriceBad}");
Console.WriteLine($"VIP customer pays: {vipPriceBad}");
stopwatch.Stop();
Console.WriteLine($"Time taken (Without OCP): {stopwatch.Elapsed.TotalMilliseconds} ms");
Console.WriteLine("\n--- With OCP --");
stopwatch.Restart();


var regularPriceGood = discountManager.CalculateDiscount(100, new RegularDiscount());
var vipPriceGood = discountManager.CalculateDiscount(100, new VIPDiscount());

Console.WriteLine($"Regular customer pays: {regularPriceGood}");
Console.WriteLine($"VIP customer pays: {vipPriceGood}");
// ----------- Extend to Premium Without changing Any Code --------------//
var premiumPriceGood = discountManager.CalculateDiscount(100, new PremiumDiscount());
Console.WriteLine($"Premium Customer Pays L: {premiumPriceGood}");
stopwatch.Stop();
Console.WriteLine($"Time taken (With OCP): {stopwatch.Elapsed.TotalMilliseconds} ms");

Console.ReadLine();



