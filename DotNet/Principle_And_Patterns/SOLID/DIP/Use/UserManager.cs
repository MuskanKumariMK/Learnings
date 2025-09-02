namespace DIP.Use
{
     // High-level depends on abstraction
     internal class UserManager
     {
          private readonly IUserRepository _repo;

          public UserManager(IUserRepository repo) // constructor injection
          {
               _repo = repo;
          }

          public void AddUser(string user)
          {
               _repo.Save(user);
          }
     }
}
