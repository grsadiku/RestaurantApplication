using AutoMapper;
using RestaurantApp.Models;
using RestaurantApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.Profiles
{
    public class ProfileMapper : Profile
    {
        public ProfileMapper()
        {
            CreateMap<RestaurantTable, RestaurantTableViewModel>().ReverseMap();
            CreateMap<TableReservation, TableReservationViewModel>().ReverseMap();
        }
    }
}
