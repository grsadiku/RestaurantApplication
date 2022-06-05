using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.ViewModels
{
    public class NewTableReservationViewModel
    {
        [Required]
        public int IDTable { get; set; }

        [Required]
        public DateTime? Date { get; set; }
    }
}
