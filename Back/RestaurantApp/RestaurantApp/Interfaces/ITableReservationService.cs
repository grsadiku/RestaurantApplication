using RestaurantApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantApp.Interfaces
{
    public interface ITableReservationService
    {
        IEnumerable<TableReservationViewModel> GetTableReservations();
        bool AddTableReservation(NewTableReservationViewModel _);
        bool CheckTableReservation(NewTableReservationViewModel _);
        bool EditProduct(NewTableReservationViewModel _, int id);
        TableReservationViewModel GetTableReservation(int id);
        IEnumerable<TableReservationViewModel> GetTableReservationsByTable(int idTable);

    }
}
