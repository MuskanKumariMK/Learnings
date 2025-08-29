using MAUI_Test_App.Models;

namespace MAUI_Test_App;

public partial class INotifyProvideDemo : ContentPage
{
     Employee emp = new Employee();
     public INotifyProvideDemo()
     {
          InitializeComponent();
          emp = new Employee()
          {
               Id = 1,
               Name = "Test",
               Age = 20,
               Salary = 5000
          };
          BindingContext = emp;
     }

     private void Button_Clicked(object sender, EventArgs e)
     {
          emp.Id = 2;
          emp.Name = "Second Test ";
          emp.Age = 25;
          emp.Salary = 50000;
     }
}