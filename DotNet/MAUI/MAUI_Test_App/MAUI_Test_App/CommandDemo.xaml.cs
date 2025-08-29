namespace MAUI_Test_App;

public partial class CommandDemo : ContentPage
{
     public CommandDemo()
     {
          InitializeComponent();
     }

     private void btn_Clicked(object sender, EventArgs e)
     {
          DisplayAlert("Display Alert", "Hello World", "OK");
     }

     private void RadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
     {
          if (e.Value)
          {
               var radio = sender as RadioButton;
               DisplayAlert("Option Selected", $"Selected: {radio?.Content}", "OK");
          }
     }

     private void Searching_SearchButtonPressed(object sender, EventArgs e)
     {
          DisplayAlert("Searching", $"You searched: {Searching.Text}", "OK");
     }

     private void SwipeItem_Invoked(object sender, EventArgs e)
     {
          DisplayAlert("Swipe Action", "Delete action triggered!", "OK");
     }

     private void SwipeItem_Invoked_1(object sender, EventArgs e)
     {
          DisplayAlert("Swipe Action", "Edit action triggered!", "OK");
     }
}
