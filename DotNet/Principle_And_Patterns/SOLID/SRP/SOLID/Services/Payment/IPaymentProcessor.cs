using SOLID.Models;

namespace SOLID.Services.Payment
{
     public interface IPaymentProcessor
     {
          void ProcessPayment(Order order);
     }
}
