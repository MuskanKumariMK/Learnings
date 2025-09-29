using JWTAuth.Data;
using JWTAuth.Models;
using JWTAuth.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace JWTAuth.Controllers
{
    [Route("api")]
    [ApiController]


    public class AuthController : Controller
    {
        private readonly IUserRepository _userRepository;
        public AuthController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        [HttpPost("register")]
       public IActionResult Register(AddViewModel viewModel
            )
        {
            var user = new User
            {
                Name = viewModel.Name,
                Email = viewModel.Email,
                Password =BCrypt.Net.BCrypt.HashPassword( viewModel.Password),
            };
            
            return Created("Success", _userRepository.Create(user));
        }  [HttpPost("Login")]
       public IActionResult Login(LoginViewModel viewModel
            )
           
        {
         var user = _userRepository.GetEmail(viewModel Email)
//https://www.youtube.com/watch?v=WNKwdgr34fA&list=PLlameCF3cMEtY5S-9aVlCobcfDdbmpjPa


        }
    }
}
