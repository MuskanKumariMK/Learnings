using SOLID.Models;

namespace SOLID.Services.Payment
{
     public class CreditCardPayment
 : IPaymentProcessor
     {
          public void ProcessPayment(Order order)
          {
               Console.WriteLine($"Processing credit card payment for Order ID: {order.Id}, Amount: {order.TotalAmount}");
          }
     }
}
