using MAUI_Test_App.MVVM.Models;

namespace MAUI_Test_App.MVVM.ViewModels
{
     public class CollectionProductViewModels
     {
          public List<Product> ProductsView { get; set; }
          public CollectionProductViewModels()
          {
               ProductsView = new List<Product>()
            {
                new Product
                {
                    Title = "Laptop",
                    Description = "Powerful gaming laptop",
                    Category = "Electronics",
                    ProductWeight = 2.5,
                    AvailableQTY = 5,
                    IsPopular = true,
                    CreateTime = DateTime.Now
                },
                new Product
                {
                    Title = "Mobile Phone",
                    Description = "Latest Android smartphone",
                    Category = "Electronics",
                    ProductWeight = 0.3,
                    AvailableQTY = 15,
                    IsPopular = true,
                    CreateTime = DateTime.Now.AddDays(-2)
                },
                new Product
                {
                    Title = "Book",
                    Description = "C# Programming Guide",
                    Category = "Education",
                    ProductWeight = 1.2,
                    AvailableQTY = 50,
                    IsPopular = false,
                    CreateTime = DateTime.Now.AddMonths(-1)
                }
            };
          }
     }
}
