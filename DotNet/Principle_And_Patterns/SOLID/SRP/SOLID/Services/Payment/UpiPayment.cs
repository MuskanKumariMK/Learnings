using SOLID.Models;

namespace SOLID.Services.Payment
{
     public class UpiPayment : IPaymentProcessor
     {
          public void ProcessPayment(Order order)
          {
               Console.WriteLine($"Processing UPI payment for Order ID: {order.Id}, Amount: {order.TotalAmount}");
          }
     }
}
