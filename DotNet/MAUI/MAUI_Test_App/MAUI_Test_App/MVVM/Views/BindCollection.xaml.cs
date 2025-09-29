using MAUI_Test_App.MVVM.ViewModels;

namespace MAUI_Test_App.MVVM.Views;

public partial class BindCollection : ContentPage
{
     public BindCollection()
     {
          InitializeComponent();
          BindingContext = new CollectionProductViewModels();

     }
}