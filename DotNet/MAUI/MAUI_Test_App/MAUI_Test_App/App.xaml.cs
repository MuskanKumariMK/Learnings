namespace MAUI_Test_App
{
     public partial class App : Application
     {
          public App()
          {
               InitializeComponent();
               var NavPage = new NavigationPage(new MainPage());
               NavPage.BarBackgroundColor = Colors.Green;
               NavPage.BarTextColor = Colors.Blue;
               //MainPage = new FlyOutPageDemo();
               //MainPage = new TabbedPageDemo();
               //MainPage = new StackPageDemo();
               //MainPage = new GridPageDemo(); 
               //MainPage = new GridPageDemo(); 
               //MainPage = new HomePage();
               MainPage = new PresentaionControlPage();
          }
     }
}
