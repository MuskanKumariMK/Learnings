using SOLID.Models;
using SOLID.Services.Notification;
using SOLID.Services.Payment;

namespace SOLID.Services.Checkout
{
     public class CheckoutService
     {
          private readonly IPaymentProcessor _paymentProcessor;
          private readonly IEmailNotifier _emailNotifier;
          public CheckoutService(IPaymentProcessor paymentProcessor, IEmailNotifier emailNotifier)
          {
               _emailNotifier = emailNotifier;
               _paymentProcessor = paymentProcessor;
          }
          public void Checkout(Order order, string toEmail)
          {
               _paymentProcessor.ProcessPayment(order);
               _emailNotifier.SendEmail(toEmail, "Check Out Success Message ", $"Order {order.Id} confirmed. Amount: {order.TotalAmount}");
          }
     }
}
