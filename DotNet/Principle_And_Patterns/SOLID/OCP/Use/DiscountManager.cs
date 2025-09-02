namespace OCP.Use
{
     public class DiscountManager
     {
          public double CalculateDiscount(double price, IDiscount discountStrategy)
          {
               return discountStrategy.Apply(price);
          }
     }
}
