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
    public class TableReservationService : ITableReservationService
    {
        private ITableReservationRepository _reservationRepository;
        private readonly IMapper _mapper;

        public TableReservationService(ITableReservationRepository reservationRepository, IMapper mapper)
        {
            _reservationRepository = reservationRepository;
            _mapper = mapper;
        }

        public bool AddTableReservation(NewTableReservationViewModel _)
        {
            var data = new TableReservation
            {
                IDRestaurantTable = _.IDTable,
                ReservationDate = _.Date
            };

            try
            {
                _reservationRepository.Add(data);
            }
            catch (IOException ex)
            {
                return false;
            }

            return _reservationRepository.SaveChanges() > 0;
        }

        public bool CheckTableReservation(NewTableReservationViewModel _)
        {
            return _reservationRepository.CheckIfReservationValid(_.IDTable, _.Date ?? DateTime.Now);
        }

        public bool EditProduct(NewTableReservationViewModel _, int id)
        {
            throw new NotImplementedException();
        }

        public TableReservationViewModel GetTableReservation(int id)
        {
            var data = _reservationRepository.GetById(id);
            var result = _mapper.Map<TableReservationViewModel>(data);
            return result;
        }

        public IEnumerable<TableReservationViewModel> GetTableReservations()
        {
            var data = _reservationRepository.GetAll();
            var result = _mapper.Map<IList<TableReservationViewModel>>(data);
            return result;
        }

        public IEnumerable<TableReservationViewModel> GetTableReservationsByTable(int idTable)
        {
            throw new NotImplementedException();
        }
    }
}
