using Common.Models;

namespace SRP.Use
{
     public class UserManager
     {
          private readonly UserValidator _validator = new UserValidator();
          private readonly UserRepository _repository = new UserRepository();

          public void AddUser(User user)
          {
               if (_validator.Validate(user))
               {
                    _repository.Save(user);
               }
               else
               {
                    Console.WriteLine("User validation failed.");
               }
          }
     }
}
