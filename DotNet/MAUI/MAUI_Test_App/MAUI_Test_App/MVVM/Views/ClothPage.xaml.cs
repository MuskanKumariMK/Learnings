using MAUI_Test_App.MVVM.ViewModels;

namespace MAUI_Test_App.MVVM.Views;

public partial class ClothPage : ContentPage
{
    public ClothPage()
    {
        InitializeComponent();
        BindingContext = new ClothViewModel();
    }
}