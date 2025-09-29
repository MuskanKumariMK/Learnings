namespace MAUI_Test_App.MVVM.Views;
using MAUI_Test_App.MVVM.ViewModels;
public partial class CommandExample : ContentPage
{
     public CommandExample()
     {
          InitializeComponent();
          BindingContext = new CommandViewModel();
     }
}