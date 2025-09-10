namespace SOLID.Services.Notification
{
     public interface ISmsNotifier
     {
          void SendSms(string to, string message);
     }
}
