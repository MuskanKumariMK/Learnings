using Common.Models;

namespace SRP.NotUse
{
     public class UserManager
     {
          public void AddUser(User user)
          {
               // Validation logic
               if (string.IsNullOrEmpty(user.Name))
               {
                    Console.WriteLine("User validation failed.");
                    return;
               }

               // Data persistence logic (simulated)
               Console.WriteLine($"User '{user.Name}' saved to database.");
          }
     }
}
