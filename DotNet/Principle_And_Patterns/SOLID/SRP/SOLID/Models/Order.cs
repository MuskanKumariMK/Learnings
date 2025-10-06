namespace SOLID.Models
{
     public class Order
     {
          public int Id { get; set; }
          public List<string> Items { get; set; } = new();
          public double TotalAmount { get; set; }
     }
}
