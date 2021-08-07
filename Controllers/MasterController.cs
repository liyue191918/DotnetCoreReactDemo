using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Frontend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MasterController : ControllerBase
    {

        private readonly ILogger<MasterController> _logger;

        public MasterController(ILogger<MasterController> logger)
        {
            _logger = logger;
        }

        [HttpGet("States")]
        public List<string> GetStates()
        {
            List<string> states = new List<string>() { "California", "Louisiana", "Alsakaa"};
            return states;
        }

        [HttpGet("Identifications")]
        public List<string> GetIdentifications()
        {
            List<string> states = new List<string>() { "NIT", "foreign", "other"};
            return states;
        }

    }
}
