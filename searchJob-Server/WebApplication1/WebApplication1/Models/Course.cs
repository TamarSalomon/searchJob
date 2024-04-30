namespace WebApplication1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
public class Course
{
    public Course( string Name ,int numHours,coursesType type ,DateTime startDate,
     string nameLecturer,string publicrequiredSoftware,bool isJoin )
     {
        this.Name=Name;
        this.numHours=numHours;
        this.type=type;
        this.startDate=startDate;
        this.nameLecturer=nameLecturer;
        this.publicrequiredSoftware=publicrequiredSoftware;
        this.isJoin=isJoin;
     }
    
        
    
    public string Name { get; set; }

    public int numHours { get; set; }
    public coursesType type { get; set; }
    public DateTime startDate { get; set; }
    
    public string nameLecturer { get; set; }
    public string publicrequiredSoftware { get; set; }
    public bool isJoin { get; set; }
}
public enum coursesType
{
    Frontal,
    Laboratory,
    Computerized
}

