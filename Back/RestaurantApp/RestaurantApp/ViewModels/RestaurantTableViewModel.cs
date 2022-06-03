using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.ViewModels
{
    public class RestaurantTableViewModel
    {
        public int ID { get; set; }
        public string Location { get; set; }
        public int TotalSeats { get; set; }
    }
}
