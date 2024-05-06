public class Job
{
    public Job(JobField jobfield, string jobName, int scopeOfHours, string requirements, bool workingFromHome, Area area)
    {
        this.jobfield = jobfield;
        this.jobName = jobName;
        this.scopeOfHours = scopeOfHours;
        this.requirements = requirements;
        this.workingFromHome = workingFromHome;
        this.area = area;
    }

    public JobField jobfield { get; set; }
    public Area area { get; set; }
    public string jobName { get; set; }
    public int scopeOfHours { get; set; }
    public string requirements { get; set; }
    public bool workingFromHome { get; set; }
   
}

public enum JobField { PROGRAMMER, ANALYST, QA }
public enum Area { NORTH, SOUTH, CENTER }
