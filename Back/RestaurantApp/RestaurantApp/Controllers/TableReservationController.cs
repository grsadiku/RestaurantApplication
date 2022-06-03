using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RestaurantApp.Interfaces;
using RestaurantApp.ViewModels;

namespace RestaurantApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TableReservationController : ControllerBase
    {
        private readonly ILogger<TableReservationController> _logger;
        private readonly ITableReservationService _reservationtableService;

        public TableReservationController(ILogger<TableReservationController> logger, ITableReservationService reservationtableService)
        {
            _logger = logger;
            _reservationtableService = reservationtableService;
        }

        [Route("GetReservations")]
        [HttpGet]
        public IActionResult GetReservations()
        {
            try
            {
                var tables = _reservationtableService.GetTableReservations().ToList();
                return Ok(new { StatusCode = 0, Result = tables });
            }
            catch (Exception e)
            {
                return Ok(new { StatusCode = 1, ErrorMessage = e.Message });
            }
        }

        [Route("AddReservations")]
        [HttpPost]
        public IActionResult AddReservations([FromBody]NewTableReservationViewModel reservation)
        {
            if (!ModelState.IsValid)
                return Ok(new
                {
                    StatusCode = 1,
                    ErrorMessage = string.Join(" | ", ModelState.Values
                                            .SelectMany(v => v.Errors)
                                            .Select(e => e.ErrorMessage))
                });

            try
            {
                var addedTable = _reservationtableService.AddTableReservation(reservation);
                if (addedTable)
                    return Ok(new { StatusCode = 0 });
                else
                    return Ok(new { StatusCode = 2, ErrorMessage = "Insertion failed!" });
            }
            catch (Exception e)
            {
                return Ok(new { StatusCode = 1, ErrorMessage = e.Message });
            }
        }

        [Route("GetReservation/{idReservation}")]
        [HttpGet]
        public IActionResult GetReservation([FromQuery]int? idReservation)
        {
            if (idReservation == null)
                return Ok(new { StatusCode = 1, ErrorMessage = "ID is not valid!" });

            try
            {
                var table = _reservationtableService.GetTableReservation((int)idReservation);
                return Ok(new { StatusCode = 0, Result = table });
            }
            catch (Exception e)
            {
                return Ok(new { StatusCode = 1, ErrorMessage = e.Message });
            }
        }
    }
}