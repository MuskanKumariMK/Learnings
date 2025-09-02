// See https://aka.ms/new-console-template for more information
// See https://aka.ms/new-console-template for more information
using Common.Performance;
using ISP.NotUse;
using ISP.Use;

Console.WriteLine("=== Interface Segregation Principle (ISP) Demo ===\n");

Console.WriteLine("❌ Without ISP (Bad Example):");
IMultiFunctionDevice oldPrinter = new ISP.NotUse.OldPrinter();
oldPrinter.Print();
try
{
     oldPrinter.Scan(); // Will throw NotImplementedException
}
catch (NotImplementedException)
{
     Console.WriteLine("Scan not supported by OldPrinter ❌");
}
try
{
     oldPrinter.Fax(); // Will throw NotImplementedException
}
catch (NotImplementedException)
{
     Console.WriteLine("Fax not supported by OldPrinter ❌");
}

Console.WriteLine("\n With ISP (Good):");
IPrinter oldPrinterGood = new ISP.Use.OldPrinter();
oldPrinterGood.Print(); // Only prints, no Scan or Fax

ModernPrinter modernPrinter = new ModernPrinter();
modernPrinter.Print();
modernPrinter.Scan();
modernPrinter.Fax();

Console.WriteLine("\n=== Demo Complete ===");

// --------------- Performance testing --------------// 

Console.WriteLine("=== Interface Segregation Principle (ISP) Demo ===\n");

Console.WriteLine("❌ Without ISP (Bad Example):");
PerformanceTester.MeasureTime(() =>
{
     IMultiFunctionDevice oldPrinter = new ISP.NotUse.OldPrinter();
     oldPrinter.Print();
     try
     {
          oldPrinter.Scan(); // Will throw NotImplementedException
     }
     catch (NotImplementedException)
     {
          Console.WriteLine("Scan not supported by OldPrinter ❌");
     }
     try
     {
          oldPrinter.Fax(); // Will throw NotImplementedException
     }
     catch (NotImplementedException)
     {
          Console.WriteLine("Fax not supported by OldPrinter ❌");
     }
}, "Without ISP Time");

Console.WriteLine("\n With ISP (Good ):");
PerformanceTester.MeasureTime(() =>
{
     IPrinter oldPrinterGood = new ISP.Use.OldPrinter();
     oldPrinterGood.Print(); // Only prints, no Scan or Fax

     ModernPrinter modernPrinter = new ModernPrinter();
     modernPrinter.Print();
     modernPrinter.Scan();
     modernPrinter.Fax();
}, "With ISP Time");

Console.WriteLine("\n=== Running Benchmarks ===");

// Run repeated benchmarks to see performance difference
PerformanceTester.RunBenchmark("Without ISP Benchmark", () =>
{
     IMultiFunctionDevice printer = new ISP.NotUse.OldPrinter();
     printer.Print();
}, iterations: 1000);

PerformanceTester.RunBenchmark("With ISP Benchmark", () =>
{
     IPrinter printer = new ISP.Use.OldPrinter();
     printer.Print();
}, iterations: 1000);

Console.WriteLine("\n=== Demo Complete ===");
Console.ReadLine();
Console.ReadLine();
