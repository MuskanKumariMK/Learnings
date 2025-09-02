namespace ISP.NotUse
{
     // Problem: OldPrinter doesn’t need Scan or Fax, but must implement.
     class OldPrinter : IMultiFunctionDevice
     {
          public void Print() => Console.WriteLine("Printing...");
          public void Scan() => throw new NotImplementedException();
          public void Fax() => throw new NotImplementedException();
     }
}
