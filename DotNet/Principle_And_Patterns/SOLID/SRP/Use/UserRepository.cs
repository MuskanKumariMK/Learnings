using Common.Models;

namespace SRP.Use
{
     public class UserRepository
     {
          public void Save(User user)
          {
               Console.WriteLine($"User '{user.Name}' saved to database.");
          }
     }
}
