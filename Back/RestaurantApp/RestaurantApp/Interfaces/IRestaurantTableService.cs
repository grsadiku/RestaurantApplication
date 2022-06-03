using RestaurantApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.Interfaces
{
    public interface IRestaurantTableService
    {
        IEnumerable<RestaurantTableViewModel> GetRestaurantTables();
        bool AddRestaurantTable(NewRestaurantTableViewModel _);
        RestaurantTableViewModel GetRestaurantTable(int id);
    }
}
