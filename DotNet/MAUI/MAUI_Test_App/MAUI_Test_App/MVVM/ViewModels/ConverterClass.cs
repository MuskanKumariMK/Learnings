using System.Globalization;

namespace MAUI_Test_App.MVVM.ViewModels
{
     public class ConverterClass
 : IValueConverter
     {
          public object? Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
          {
               string married = value.ToString();
               if (married == "Married")
               {
                    return true;
               }
               else
               {
                    return false;
               }
          }

          public object? ConvertBack(object? value, Type targetType, object? parameter, CultureInfo culture)
          {
               if (value is bool isChecked && isChecked)
                    return "Married";
               else
                    return "Single";
          }
     }
}
