namespace SOLID.Services.Notification
{
     public interface IEmailNotifier
     {
          void SendEmail(string to, string subject, string body);
     }
}
