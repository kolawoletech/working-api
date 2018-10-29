namespace Submission.Migrations.Movies
{
    using Submission.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Submission.Models.MovieCollectionContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            MigrationsDirectory = @"Migrations\Movies";
        }

        protected override void Seed(Submission.Models.MovieCollectionContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.

            context.Movies.AddOrUpdate(
                m => m.MovieId, DummyData.getMovies().ToArray());
            context.SaveChanges();
        }
    }
}
