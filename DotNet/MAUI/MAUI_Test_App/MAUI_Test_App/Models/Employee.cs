using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace MAUI_Test_App.Models
{
     public class Employee : INotifyPropertyChanged
     {
          private int id;
          private string name;
          private int salary;
          private int age;

          public int Id
          {
               get => id;
               set
               {
                    if (id != value)
                    {
                         id = value;
                         OnPropertyChanged();
                    }
               }
          }

          public string Name
          {
               get => name;
               set
               {
                    if (name != value)
                    {
                         name = value;
                         OnPropertyChanged();
                    }
               }
          }

          public int Salary
          {
               get => salary;
               set
               {
                    if (salary != value)
                    {
                         salary = value;
                         OnPropertyChanged();
                    }
               }
          }

          public int Age
          {
               get => age;
               set
               {
                    if (age != value)
                    {
                         age = value;
                         OnPropertyChanged();
                    }
               }
          }

          public event PropertyChangedEventHandler? PropertyChanged;

          protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
          {
               PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
          }
     }
}
