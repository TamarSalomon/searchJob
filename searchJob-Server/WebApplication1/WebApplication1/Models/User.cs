
namespace WebApplication1.Models
{
    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
      
        public string password { get; set; }


        public  JobField jobfield {get; set;}

         public User(int id ,string name,string password ,JobField jobfield)
    {
        this.id=id;
        this.name=name;
        this.password=password;
        this.jobfield=jobfield;
    }
    }

   
}