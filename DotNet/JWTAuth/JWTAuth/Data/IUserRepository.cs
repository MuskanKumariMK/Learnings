using JWTAuth.Models;

namespace JWTAuth.Data
{
    public interface IUserRepository
    {
        User Create(User  user);
        User GetEmail(string email);
    }
}
