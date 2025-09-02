namespace ISP.Use
{
     // ModernPrinter supports multiple features by combining smaller interfaces
     class ModernPrinter : IPrinter, IScanner
     {
          public void Print() => Console.WriteLine("Printing...");
          public void Scan() => Console.WriteLine("Scanning...");
          public void Fax() => Console.WriteLine("Faxing...");
     }
}
