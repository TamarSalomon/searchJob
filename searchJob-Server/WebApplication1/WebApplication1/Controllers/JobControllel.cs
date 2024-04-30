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
using System.Threading.Tasks.Dataflow;



namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobControllel : ControllerBase
    {

        public static List<Job> myJobs = new List<Job>()
        {
            new Job(jobField.ANALYST, "Malam" , 45, "BA", false, Area.NORTH),
            new Job(jobField.PROGRAMMER, "ToopGroup", 30, "Maat", true,Area.SOUTH),
            new Job(jobField.QA, "Matrix", 45, "BA",  false,Area.SOUTH),
            new Job(jobField.PROGRAMMER, "FaceBook",50, "Maat" ,  false, Area.CENTER),
            new Job(jobField.PROGRAMMER,"Google", 35, "BA", true ,Area.CENTER),
            };

        [HttpGet("GetAllJobs")]
        public ActionResult GetAllCourses()
        {

            return Ok(myJobs);

        }
    
    }
}
