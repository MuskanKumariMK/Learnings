using MAUI_Test_App.MVVM.Models;

namespace MAUI_Test_App.MVVM.ViewModels
{
     public class PersonView
     {
          public Person Person { get; set; }
          public PersonView()
          {
               Person = new Person
               {
                    Name = "John Doe",
                    Age = 20,
                    City = "Delhi",
                    Married = "Married"
               };
          }
     }
}
