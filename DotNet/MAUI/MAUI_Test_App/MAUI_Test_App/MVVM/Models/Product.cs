namespace MAUI_Test_App.MVVM.Models
{
     public class Product
     {
          public string Title { get; set; }
          public string Description { get; set; }
          public string Category { get; set; }
          public int AvailableQTY { get; set; }
          public double ProductWeight { get; set; }
          public bool IsPopular { get; set; }
          public DateTime CreateTime { get; set; } = DateTime.Now;
          public DateTime UpdateTime { get; set; } = DateTime.Now;

     }
}
