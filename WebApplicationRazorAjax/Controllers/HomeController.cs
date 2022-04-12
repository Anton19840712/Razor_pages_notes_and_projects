using System.Linq;
using System.Web.Mvc;
using WebApplicationRazorAjax.Context;
using WebApplicationRazorAjax.Models;

namespace WebApplicationRazorAjax.Controllers
{
	public class HomeController : Controller
	{
		private UserContext _context;
		public HomeController()
		{
			_context = new UserContext();
		}
		public ActionResult Index()
		{
			return View();
		}
		public JsonResult List()
		{
			return Json(_context.Users.ToList(), JsonRequestBehavior.AllowGet);
		}
		public JsonResult Add(User user)
		{
			_context.Users.Add(user);
			_context.SaveChanges();
			return Json(JsonRequestBehavior.AllowGet);
		}
		public JsonResult GetbyID(int ID)
		{
			return Json(_context.Users.FirstOrDefault(x => x.UserId == ID), JsonRequestBehavior.AllowGet);
		}
		public JsonResult Update(User user)
		{
			var data = _context.Users.FirstOrDefault(x => x.UserId == user.UserId);
			if (data != null)
			{
				data.Login = user.Login;
				data.Password = user.Password;
				data.Email = user.Email;
				data.LastVisitDate = user.LastVisitDate;
				data.IsActive = user.IsActive;
				data.IsDeleted = user.IsDeleted;
				data.RegistrationDate = user.RegistrationDate;

				_context.SaveChanges();
			}
			return Json(JsonRequestBehavior.AllowGet);
		}
		public JsonResult Delete(int ID)
		{
			var data = _context.Users.FirstOrDefault(x => x.UserId == ID);
			_context.Users.Remove(data);
			_context.SaveChanges();
			return Json(JsonRequestBehavior.AllowGet);
		}
	}
}