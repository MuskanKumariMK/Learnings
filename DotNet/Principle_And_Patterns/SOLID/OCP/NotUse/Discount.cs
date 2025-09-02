using Common.Models;

namespace OCP.NotUse
{
     public class Discount
     {
          //  Problem: This class violates the Open/Closed Principle (OCP)
          // ---------------------------------------------------------------
          // - OCP says: "Classes should be open for extension but closed for modification."
          // - In this design, every time we introduce a new customer type (e.g., "Premium", "Student"),
          //   we must MODIFY this method.
          // - That means:
          //    1. **Frequent Changes**: Already tested and stable code must be changed again and again.
          //    2. **Bug Risk**: Each new change might accidentally break existing logic.
          //    3. **Poor Maintainability**: Discount logic for all types is hardcoded in one place.
          //    4. **Scalability Issue**: If we add 10+ customer types, this method becomes very long and unreadable.
          //    5. **Violation of SRP**: The class handles multiple discount rules instead of just one responsibility.


          public double CalculateDiscount(Customer customer, double price)
          {
               if (customer.Type == "Regular")
               {
                    return price * 0.9;
               }
               if (customer.Type == "VIP")
               {
                    return price * 0.7;
               }
               return price;
          }
          //  Example: If we add a new type "Premium", we must edit this class AGAIN
          // ---------------------------------------------------------------
          // public double CalculateDiscount(Customer customer, double price)
          // {
          //     if (customer.Type == "Regular")
          //     {
          //         return price * 0.9;
          //     }
          //     if (customer.Type == "VIP")
          //     {
          //         return price * 0.7;
          //     }
          //     if (customer.Type == "Premium")
          //     {
          //         return price * 0.6;
          //     }
          //     return price;
          // }
          //
          //  Problem grows worse with each new requirement. The method becomes a giant "if-else" block.
          //  Solution: Use OCP with polymorphism → create separate classes for each discount type.
     }
}
