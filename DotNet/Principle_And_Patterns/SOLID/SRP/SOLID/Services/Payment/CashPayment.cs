using SOLID.Models;

namespace SOLID.Services.Payment
{
     public class CashPayment : IPaymentProcessor
     {
          public void ProcessPayment(Order order)
          {
               Console.WriteLine($"Processing cash payment for Order ID: {order.Id}, Amount: {order.TotalAmount}");
          }
     }
}
