using MAUI_Test_App.MVVM.ViewModels;

namespace MAUI_Test_App.MVVM.Views;

public partial class ConvertExamples : ContentPage
{
     public ConvertExamples()
     {
          InitializeComponent();
          BindingContext = new PersonView();
     }
}