// See https://aka.ms/new-console-template for more information
using Common.Performance;
using DIP.Use;

Console.WriteLine("Hello, World!");

Console.WriteLine("=== Dependency Inversion Principle (DIP) Demo ===\n");

//  Without DIP
Console.WriteLine(" Without DIP (Bad Example):");
var oldManager = new DIP.NotUse.UserManager();
oldManager.AddUser("Muskan");

//  With DIP
Console.WriteLine("\n With DIP (Good Example):");

// Inject SQL repo
IUserRepository sqlRepo = new SqlUserRepository();
var sqlManager = new DIP.Use.UserManager(sqlRepo);
sqlManager.AddUser("Muskan");

// Inject Mongo repo
IUserRepository mongoRepo = new MongoUserRepository();
var mongoManager = new DIP.Use.UserManager(mongoRepo);
mongoManager.AddUser("User");

// ---------------- PERFORMANCE TESTS ----------------
Console.WriteLine("\n=== Performance Tests ===");

// Results storage for table
var results = new List<(string Test, double TimeMs)>();

// Without DIP performance
PerformanceTester.MeasureTime(() =>
{
     oldManager.AddUser("PerfUser_NotUse");
}, "NotUse: Single Save", results);

PerformanceTester.RunBenchmark("NotUse: Bulk Save", () =>
{
     oldManager.AddUser("PerfUser_NotUse_Bulk");
}, iterations: 1000, results);

// With DIP - SQL
PerformanceTester.MeasureTime(() =>
{
     sqlManager.AddUser("PerfUser_SQL");
}, "Use (SQL): Single Save", results);

PerformanceTester.RunBenchmark("Use (SQL): Bulk Save", () =>
{
     sqlManager.AddUser("PerfUser_SQL_Bulk");
}, iterations: 1000, results);

// With DIP - Mongo
PerformanceTester.MeasureTime(() =>
{
     mongoManager.AddUser("PerfUser_Mongo");
}, "Use (Mongo): Single Save", results);

PerformanceTester.RunBenchmark("Use (Mongo): Bulk Save", () =>
{
     mongoManager.AddUser("PerfUser_Mongo_Bulk");
}, iterations: 1000, results);

Console.WriteLine("\n=== Performance Tests Complete ===");

// ---------------- PRINT COMPARISON TABLE ----------------
Console.WriteLine("\n=== Performance Comparison Table ===");
Console.WriteLine("| Test Case              | Time (ms) |");
Console.WriteLine("|------------------------|-----------|");

foreach (var r in results)
{
     Console.WriteLine($"| {r.Test,-22} | {r.TimeMs,9:F3} |");
}

Console.WriteLine("\n=== End of Demo ===");


Console.ReadLine();