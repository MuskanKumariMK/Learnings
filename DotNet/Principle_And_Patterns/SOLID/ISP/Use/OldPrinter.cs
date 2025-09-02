namespace ISP.Use
{

     //  OldPrinter only implements what it actually supports
     class OldPrinter : IPrinter
     {
          public void Print() => Console.WriteLine("Printing...");
     }

}
