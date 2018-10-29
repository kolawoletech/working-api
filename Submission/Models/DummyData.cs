using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Submission.Models
{
    public class DummyData
    {
        public static System.Collections.Generic.List<Movie> getMovies()
        {
            List<Movie> movies = new List<Movie>()
            {
                new Movie()
                {
                   MovieId=1234,
                   Title="BatMan",
                   Plot="Orphan Fight",
                   Genre="Action, Thriller",
                   Rating="7.2",
                   Actors="George Clooney, Klaek Dent",
                   Favorited=false
                },
                 new Movie()
                {
                   MovieId=7234,
                   Title="BatMan Begin",
                   Plot="Orphan Fight",
                   Genre="Action, Thriller",
                   Rating="8.2",
                   Actors="George Clooney, Bale Christian",
                   Favorited=true
                },
            };

            return movies;

        }

         
    }
}