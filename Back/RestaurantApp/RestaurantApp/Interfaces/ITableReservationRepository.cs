using RestaurantApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.Interfaces
{
    public interface ITableReservationRepository : IRepository<TableReservation>
    {
        TableReservation GetByTableID(int id);
        IEnumerable<TableReservation> GetReservationsByTableID(int idTable);
    }
}
