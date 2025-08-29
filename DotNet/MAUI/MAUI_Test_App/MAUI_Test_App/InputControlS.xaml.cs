using System.Diagnostics;

namespace MAUI_Test_App;

public partial class InputControlS : ContentPage
{
     public InputControlS()
     {
          InitializeComponent();
     }

     private void Slider1_ValueChanged(object sender, ValueChangedEventArgs e)
     {
          ResultSlider.Text = Slider1.Value.ToString();
     }

     private void Stepper_ValueChanged(object sender, ValueChangedEventArgs e)
     {
          if (Stepper1 != null)
          {
               ResultSlider.Text = Stepper1.Value.ToString();
          }
     }

     private void UserText_TextChanged(object sender, TextChangedEventArgs e)
     {
          Debug.WriteLine(UserText.Text);
     }

     private void UserText_Completed(object sender, EventArgs e)
     {
          DisplayAlert("Entry Completed", $"You entered: {UserText.Text}", "OK");
     }
}