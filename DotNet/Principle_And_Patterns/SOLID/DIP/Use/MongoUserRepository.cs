namespace DIP.Use
{ // Low-level repository (Mongo DB)
     internal class MongoUserRepository : IUserRepository
     {
          public void Save(string user)
          {
               Console.WriteLine($"[Use] Saving user '{user}' in MongoDB ✅");
          }
     }
}
