using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.ViewModels
{
    public class NewRestaurantTableViewModel
    {
        [Required]
        public string Location { get; set; }
        [Required]
        public int TotalSeats { get; set; }
    }
}
