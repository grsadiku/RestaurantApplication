using RestaurantApp.Interfaces;
using RestaurantApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.Repositories
{
    public class TableReservationRepository : Repository<TableReservation>, ITableReservationRepository
    {
        protected readonly RestContext _context;

        public TableReservationRepository(RestContext context) : base(context)
        {
            _context = context;
        }

        public bool CheckIfReservationValid(int idTable, DateTime reservationDate)
        {
            return !_context.TableReservations.Any(x => x.IDRestaurantTable == idTable &&  x.ReservationDate == reservationDate);
        }

        public TableReservation GetByTableID(int id)
        {
            return _context.TableReservations.FirstOrDefault(x => x.IDRestaurantTable == id);
        }

        public IEnumerable<TableReservation> GetReservationsByTableID(int idTable)
        {
            return _context.TableReservations.Where(x => x.IDRestaurantTable == idTable).ToList();

        }
    }
}
