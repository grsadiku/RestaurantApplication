using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

#nullable disable

namespace RestaurantApp.Models
{
    public partial class RestContext : DbContext
    {
        public RestContext()
        {
        }

        public RestContext(DbContextOptions<RestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<RestaurantTable> RestaurantTables { get; set; }
        public virtual DbSet<TableReservation> TableReservations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<RestaurantTable>(entity =>
            {
                entity.ToTable("RestaurantTable");

                entity.Property(e => e.Location)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TableReservation>(entity =>
            {
                entity.Property(e => e.ReservationDate).HasColumnType("datetime");

                entity.HasOne(d => d.IDRestaurantTableNavigation)
                    .WithMany(p => p.TableReservations)
                    .HasForeignKey(d => d.IDRestaurantTable)
                    .HasConstraintName("FK_TableReservations_RestaurantTable");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
