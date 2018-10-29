using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Submission.Models
{
    public class Movie
    {
        
        public int MovieId  { get; set; }
        public string Title { get; set; }
        public string Plot { get; set; }
        public string Genre { get; set; }
        public string  Rating { get; set; }
        public string Actors { get; set; }
        public bool Favorited { get; set; }

    }
}