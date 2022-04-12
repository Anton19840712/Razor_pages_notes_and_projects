using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApplicationUserAjax.Models;

namespace WebApplicationUserAjax.Context
{
	public class PersonContext : DbContext
    {
        public PersonContext() : base("DbConnectionString") { }
        public DbSet<Elements> Element { get; set; }
    }
}