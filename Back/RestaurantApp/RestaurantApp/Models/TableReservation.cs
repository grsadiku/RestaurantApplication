using System;
using System.Collections.Generic;

#nullable disable

namespace RestaurantApp.Models
{
    public partial class TableReservation
    {
        public int ID { get; set; }
        public int? IDRestaurantTable { get; set; }
        public DateTime? ReservationDate { get; set; }

        public virtual RestaurantTable IDRestaurantTableNavigation { get; set; }
    }
}
