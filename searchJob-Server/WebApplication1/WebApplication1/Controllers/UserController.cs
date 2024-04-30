using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using WebApplication1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Net.Http;
using API.Models;
using WebApplication1.Models;




namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> allUsers = new List<User>()
        {
            new User(1, "tamar" , "123" ,jobField.ANALYST),
            new User(2, "bati", "456",jobField.PROGRAMMER),
            new User(3,"gila", "567", jobField.QA),
            new User(4, "miri","987", jobField.ANALYST ),
            new User(4,"sari",  "367",jobField.PROGRAMMER),
            };

        [HttpGet()]
        public ActionResult<User> Get(string? Name, string? Password)
        {
            User myUser = null;

            foreach (User user in allUsers)

            {
                if (user.Name == Name && user.Password == Password)
                    myUser = user;
            }


            if (myUser == null || Password == null || myUser.Password != Password)
                return null;
            return myUser;


        }
    }

}