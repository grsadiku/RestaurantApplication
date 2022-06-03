using RestaurantApp.Interfaces;
using RestaurantApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.Repositories
{
    public class RestaurantTableRepository : Repository<RestaurantTable>, IRestaurantTableRepository
    {
        protected readonly RestContext _context;

        public RestaurantTableRepository(RestContext context) : base(context)
        {
        }
    }
}
