using System.Linq;
using System.Web.Mvc;
using WebApplicationUserAjax.Context;
using WebApplicationUserAjax.Models;

namespace WebApplicationUserAjax.Controllers
{
	public class HomeController : Controller
	{
		private PersonContext _context;
		public HomeController()
		{
			_context = new PersonContext();
		}
		public ActionResult Index()
		{
			return View();
		}
		public JsonResult List()
		{
			return Json(_context.Element.ToList(), JsonRequestBehavior.AllowGet);
		}
		public JsonResult Add(Elements element)
		{
			_context.Element.Add(element);
			_context.SaveChanges();
			return Json(JsonRequestBehavior.AllowGet);
		}
		public JsonResult GetbyID(int ID)
		{
			return Json(_context.Element.FirstOrDefault(x => x.Id == ID), JsonRequestBehavior.AllowGet);
		}
		public JsonResult Update(Elements element)
		{
			var data = _context.Element.FirstOrDefault(x => x.Id == element.Id);
			if (data != null)
			{
				data.Name = element.Name;
				data.State = element.State;
				data.Country = element.Country;
				data.Age = element.Age;
				_context.SaveChanges();
			}
			return Json(JsonRequestBehavior.AllowGet);
		}
		public JsonResult Delete(int ID)
		{
			var data = _context.Element.FirstOrDefault(x => x.Id == ID);
			_context.Element.Remove(data);
			_context.SaveChanges();
			return Json(JsonRequestBehavior.AllowGet);
		}
	}
}