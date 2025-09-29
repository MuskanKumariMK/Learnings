using MAUI_Test_App.MVVM.ViewModels;

namespace MAUI_Test_App.MVVM.Views;

public partial class ProductPage : ContentPage
{
     public ProductPage()
     {
          InitializeComponent();

          BindingContext = new ProductViewModels();
     }
}