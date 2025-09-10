// See https://aka.ms/new-console-template for more information
using SOLID.Services.Checkout;
using SOLID.Services.Notification;
using SOLID.Services.Orders;
using SOLID.Services.Payment;

Console.WriteLine("Hello, World!");
Console.WriteLine("Enter items separated by comma (e.g., Pizza,Pasta,Burger):");
var input = Console.ReadLine();
var items = input?.Split(',', StringSplitOptions.RemoveEmptyEntries)
                  .Select(i => i.Trim())
                  .ToList() ?? new List<string>();

var orderService = new OrderService();

var order = orderService.CreateOrder(items);

Console.WriteLine("Choose payment method (1 = CreditCard, 2 = UPI, 3 = Cash):");
var paymentChoice = Console.ReadLine();

IPaymentProcessor paymentProcessor = paymentChoice switch
{
     "1" => new CreditCardPayment(),
     "2" => new UpiPayment(),
     "3" => new CashPayment(),
     _ => new CashPayment()
};

Console.WriteLine("Enter your email for confirmation:");
var email = Console.ReadLine() ?? "example@example.com";

// --- Checkout ---
IEmailNotifier emailNotifier = new NotificationService();
var checkoutService = new CheckoutService(paymentProcessor, emailNotifier);
checkoutService.Checkout(order, email);

Console.WriteLine(" Order placed successfully!");
Console.ReadLine();
