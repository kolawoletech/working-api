using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Submission.Models
{
    public class MovieCollectionContext: DbContext
    {
        public MovieCollectionContext()
            :base("DefaultConnection")
        {}

        public DbSet<Movie> Movies { get; set; }
    }
}