using Common.Models;

namespace SRP.Use
{
     public class UserValidator
     {
          public bool Validate(User user)
          {
               return !string.IsNullOrEmpty(user.Name);
          }
     }
}
