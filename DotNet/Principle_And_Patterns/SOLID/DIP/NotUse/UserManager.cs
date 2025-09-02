namespace DIP.NotUse
{
     // High-level depends directly on low-level
     internal class UserManager
     {
          private UserRepository _repo = new UserRepository(); // ❌ Tightly coupled

          public void AddUser(string user)
          {
               _repo.Save(user);
          }
     }
}
