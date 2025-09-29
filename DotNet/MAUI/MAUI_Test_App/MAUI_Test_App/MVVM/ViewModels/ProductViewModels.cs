using MAUI_Test_App.MVVM.Models;

namespace MAUI_Test_App.MVVM.ViewModels
{
     public class ProductViewModels
     {
          public Product Product { get; set; }
          public ProductViewModels()
          {

               Product = new Product()
               {
                    Title = "Test",
                    Description = "Test description",
                    Category = "Default",
                    AvailableQTY = 10,
                    ProductWeight = 1.5,
                    IsPopular = true,
                    CreateTime = DateTime.Now,


               };
          }
     }
}
