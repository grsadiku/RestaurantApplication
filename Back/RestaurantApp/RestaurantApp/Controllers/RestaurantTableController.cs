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
    public class RestaurantTableController : ControllerBase
    {
        private readonly ILogger<RestaurantTableController> _logger;
        private readonly IRestaurantTableService _rtableService;

        public RestaurantTableController(ILogger<RestaurantTableController> logger, IRestaurantTableService rtableService)
        {
            _logger = logger;
            _rtableService = rtableService;
        }

        [Route("GetTables")]
        [HttpGet]
        public IActionResult GetTables()
        {
            try
            {
                var tables = _rtableService.GetRestaurantTables().ToList();
                return Ok(tables);
                //return Ok(new { StatusCode = 0, Result = tables });
            }
            catch(Exception e)
            {
                return Ok(new { StatusCode = 1, ErrorMessage = e.Message });
            }
        }

        [Route("AddTable")]
        [HttpPost]
        public IActionResult AddTable([FromBody]NewRestaurantTableViewModel table)
        {
            if(!ModelState.IsValid)
                return Ok(new { StatusCode = 1, ErrorMessage = string.Join(" | ", ModelState.Values
                                            .SelectMany(v => v.Errors)
                                            .Select(e => e.ErrorMessage))
                              });

            try
            {
                var addedTable = _rtableService.AddRestaurantTable(table);
                if(addedTable)
                   return Ok(new { StatusCode = 0 });
                else
                    return Ok(new { StatusCode = 2, ErrorMessage = "Insertion failed!"});
            }
            catch (Exception e)
            {
                return Ok(new { StatusCode = 1, ErrorMessage = e.Message });
            }
        }

        [Route("GetTable/{idTable}")]
        [HttpGet]
        public IActionResult GetTables([FromQuery]int? idTable)
        {
            if(idTable == null)
                return Ok(new { StatusCode = 1, ErrorMessage = "ID is not valid!" });

            try
            {
                var table = _rtableService.GetRestaurantTable((int)idTable);
                return Ok(new { StatusCode = 0, Result = table });
            }
            catch (Exception e)
            {
                return Ok(new { StatusCode = 1, ErrorMessage = e.Message });
            }
        }
    }
}