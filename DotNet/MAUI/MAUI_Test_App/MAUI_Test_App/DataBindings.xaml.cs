using MAUI_Test_App.Models;

namespace MAUI_Test_App;

public partial class DataBindings : ContentPage
{
     public DataBindings()
     {
          InitializeComponent();
     }

     private void Button_Clicked(object sender, EventArgs e)
     {
          Employee emp = new Employee()
          {
               Id = 1,
               Name = "John Doe",
               Age = 21,
               Salary = 10000,
          };
          //Binding employeeBinding = new Binding();
          //employeeBinding.Source = emp;
          //employeeBinding.Path = "Name";
          //EmployeeLabel.SetBinding(Label.TextProperty, employeeBinding);
          //Entry entryLabel = new Entry();

          //BindingContext = emp;
          EmployeeLabel.BindingContext = emp;
          EmployeeLabel.SetBinding(Label.TextProperty, "Name");
          EmployeeLabel.SetBinding(Label.TextProperty, "Salary");

     }
}