using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {

        public static List<Job> myJobs = new List<Job>()
        {
            new Job(JobField.ANALYST, "Malam" , 45, "BA", false, Area.NORTH),
            new Job(JobField.PROGRAMMER, "ToopGroup", 30, "Maat", true, Area.SOUTH),
            new Job(JobField.QA, "Matrix", 45, "BA",  false, Area.SOUTH),
            new Job(JobField.PROGRAMMER, "FaceBook",50, "Maat" ,  false, Area.CENTER),
            new Job(JobField.PROGRAMMER,"Google", 35, "BA", true ,Area.CENTER),
             new Job(JobField.ANALYST, "Cheak Point" , 45, "MAAT", false, Area.NORTH),
           new Job(JobField.PROGRAMMER, "UCC", 36, "Maat", true, Area.SOUTH),
           new Job(JobField.QA, "Cellebrite", 32, "BA", true, Area.CENTER),

            new Job(JobField.PROGRAMMER, "NESS", 24, "Maat", true, Area.SOUTH),
            new Job(JobField.ANALYST, "CODE OASIS", 22, "BA", true, Area.CENTER),
             new Job(JobField.QA, "Elad", 45, "BA",  false, Area.NORTH),
            new Job(JobField.PROGRAMMER, "Software AG", 31, "Maat", true, Area.NORTH),
            new Job(JobField.ANALYST, " FatFish", 30, "BA", true, Area.SOUTH),

            new Job(JobField.QA, "GRTH", 38, "BA", true, Area.NORTH),
            new Job(JobField.QA, "EXTREME", 35, "Maat", true, Area.CENTER),


        };

        [HttpGet("GetAllJobs")]
        public ActionResult<IEnumerable<Job>> GetAllJobs()
        {
            return Ok(myJobs);
        }
    }
}
