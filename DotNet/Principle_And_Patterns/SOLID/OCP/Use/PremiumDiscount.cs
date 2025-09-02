namespace OCP.Use
{
     public class PremiumDiscount : IDiscount
     {
          public double Apply(double price)
          {
               return price * 0.6;
          }
     }
}
