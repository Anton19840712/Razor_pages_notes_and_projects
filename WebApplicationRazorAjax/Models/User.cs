using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplicationRazorAjax.Models
{
	public class User
	{
		[Key]
		public long UserId { get; set; }
		public string Login { get; set; }
		public string Password { get; set; }
		public string Email { get; set; }
		public DateTime LastVisitDate { get; set; } = DateTime.Now;
		public bool IsActive { get; set; }
		public bool IsDeleted { get; set; }
		public DateTime RegistrationDate { get; set; }
	}
}