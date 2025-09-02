namespace OCP.Use
{
     public class RegularDiscount : IDiscount
     {
          public double Apply(double price)
          {
               return price * 0.9;
          }
     }
}
