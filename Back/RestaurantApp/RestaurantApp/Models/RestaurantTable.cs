using System;
using System.Collections.Generic;

#nullable disable

namespace RestaurantApp.Models
{
    public partial class RestaurantTable
    {
        public RestaurantTable()
        {
            TableReservations = new HashSet<TableReservation>();
        }

        public int ID { get; set; }
        public string Location { get; set; }
        public int? TotalSeats { get; set; }

        public virtual ICollection<TableReservation> TableReservations { get; set; }
    }
}
