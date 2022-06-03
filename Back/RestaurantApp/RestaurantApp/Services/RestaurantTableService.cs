using AutoMapper;
using RestaurantApp.Interfaces;
using RestaurantApp.Models;
using RestaurantApp.ViewModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.Services
{
    public class RestaurantTableService : IRestaurantTableService
    {
        private IRestaurantTableRepository _restaurantTableRepository;
        private readonly IMapper _mapper;

        public RestaurantTableService(IRestaurantTableRepository restaurantTableRepository, IMapper mapper)
        {
            _restaurantTableRepository = restaurantTableRepository;
            _mapper = mapper;
        }

        public bool AddRestaurantTable(NewRestaurantTableViewModel _)
        {
            var data = _mapper.Map<RestaurantTable>(_);

            try
            {
                _restaurantTableRepository.Add(data);
            }
            catch (IOException ex)
            {
                return false;
            }

            return _restaurantTableRepository.SaveChanges() > 0;
        }

        public RestaurantTableViewModel GetRestaurantTable(int id)
        {
            var data = _restaurantTableRepository.GetById(id);
            var result = _mapper.Map<RestaurantTableViewModel>(data);
            return result;
        }

        public IEnumerable<RestaurantTableViewModel> GetRestaurantTables()
        {
            var data = _restaurantTableRepository.GetAll();
            var result = _mapper.Map<IList<RestaurantTableViewModel>>(data);
            return result;
        }
    }
}
