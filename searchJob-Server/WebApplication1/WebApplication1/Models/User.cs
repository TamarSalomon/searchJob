
namespace WebApplication1.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
      
        public string Password { get; set; }


        public  jobField jobfield {get; set;}

         public User(int Id ,string Name,string Password ,jobField jobfield)
    {
        this.Id=Id;
        this.Name=Name;
        this.Password=Password;
        this.jobfield=jobfield;
    }
    }

   
}