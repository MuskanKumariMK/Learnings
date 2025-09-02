namespace DIP.NotUse
{
     // Low-level repository
     internal class UserRepository
     {
          public void Save(string user)
          {
               Console.WriteLine($"[NotUse] Saving user '{user}' in SQL Database ❌");
          }
     }
}
