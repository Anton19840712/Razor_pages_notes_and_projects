using System.Web;
using System.Web.Mvc;

namespace WebApplicationRazorAjax
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters(GlobalFilterCollection filters)
		{
			filters.Add(new HandleErrorAttribute());
		}
	}
}
