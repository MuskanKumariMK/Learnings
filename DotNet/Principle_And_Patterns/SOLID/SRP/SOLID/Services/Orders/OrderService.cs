using SOLID.Models;

namespace SOLID.Services.Orders
{
     public class OrderService
     {
          public Order CreateOrder(List<string> items)
          {
               var order = new Order
               {
                    Id = 1,
                    Items = items,
                    TotalAmount = items.Count * 10.0
               };
               Console.WriteLine($"Order created with ID: {order.Id}, Total Amount: {order.TotalAmount}");
               return order;
          }
     }
}
