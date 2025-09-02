namespace DIP.Use
{

     // Low-level repository (SQL DB)
     internal class SqlUserRepository : IUserRepository
     {
          public void Save(string user)
          {
               Console.WriteLine($"[Use] Saving user '{user}' in SQL Database ✅");
          }
     }

}
