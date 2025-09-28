
using JWTAuth.Models;

namespace JWTAuth.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly UserDbContext _usercontext;
        public UserRepository(UserDbContext _usercontext)
        {
                
        }  public  User Create(User user)
        {
                _usercontext.Users.Add(user);
             user.Id =   _usercontext.SaveChanges();
            return user;
        }
        public  User GetEmail(User email)
        {
            return _usercontext.Users.FirstOrDefault(u => u.Email == email);
        }
    }
}
