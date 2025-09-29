using System.Windows.Input;

namespace MAUI_Test_App.MVVM.ViewModels
{
     public class CommandViewModel
     {

          public ICommand CommandClick => new Command(ExecuteAlert);
          public ICommand CommandSearch => new Command(CommandSearchMethos);
          private void CommandSearchMethos(object obj)
          {
               App.Current.MainPage.DisplayAlert("Alert", $"{searchCommand}", "OK");
          }
          public string searchCommand { get; set; }

          private void ExecuteAlert(object obj)
          {
               App.Current.MainPage.DisplayAlert("Alert", "Button Clicked", "OK");
          }
     }

}
