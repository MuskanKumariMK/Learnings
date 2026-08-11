using System.Globalization;

namespace MAUI_Test_App.MVVM.ViewModels
{
     public class ConverterClass
 : IValueConverter
     {
          public object? Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
          {
               return string.Equals(
                    value?.ToString(),
                    "Married",
                    StringComparison.OrdinalIgnoreCase);
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
