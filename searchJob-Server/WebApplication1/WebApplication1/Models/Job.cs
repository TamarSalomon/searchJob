namespace WebApplication1.Models
{
    public class Job
    {

     public Job( jobField jobfield ,string  jobName ,int scopeOfHours ,string requirements,
     bool WorkingFromHome  ,Area area )
     {
       this.jobfield = jobfield;
        this.jobName=jobName;
        this.scopeOfHours=scopeOfHours;
        this.requirements=requirements;
        this.WorkingFromHome=WorkingFromHome;
        this.area=area;
     
     }
    
        public jobField jobfield {get; set;}

        public Area area {get; set;}
       
        public string jobName { get; set; }
        public int scopeOfHours { get; set; }
        public string requirements  { get; set; }
       
       public bool WorkingFromHome {get; set;}
    }

    public enum jobField { PROGRAMMER, ANALYST, QA}

    public enum Area{NORTH,SOUTH,CENTER}
}
