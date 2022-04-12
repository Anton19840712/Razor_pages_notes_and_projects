using System.Data.Entity;
using WebApplicationRazorAjax.Models;

namespace WebApplicationRazorAjax.Context
{
	public class UserContext : DbContext
	{
		public UserContext() : base("StringDBContext") { }
		public DbSet<User> Users { get; set; }
	}
}