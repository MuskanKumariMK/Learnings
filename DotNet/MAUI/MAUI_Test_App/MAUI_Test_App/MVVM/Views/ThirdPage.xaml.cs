namespace MAUI_Test_App.MVVM.Views;

public partial class ThirdPage : ContentPage
{
    public ThirdPage()
    {
        InitializeComponent();
    }
    private void Button_Clicked(object sender, EventArgs e)
    {
        Navigation.PushAsync(new FirstPage());
    }
}