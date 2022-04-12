using System.ComponentModel.DataAnnotations;

namespace WebApplicationUserAjax.Models
{
	public class Elements
	{
		[Key]
		public long Id { get; set; }
		public string Name { get; set; }
		public int Age { get; set; }
		public string State { get; set; }
		public string Country { get; set; }
	}
}