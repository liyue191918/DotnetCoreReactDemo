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
    public class CompanyController : ControllerBase
    {

        private static readonly List<Company> Companies = new List<Company>(new Company[]
        {
            new Company(){nit = "2322467", identificationType = "NIT", identificationNumber = "2102149823659", companyName   = "IBC", firstname = "Michelle", secondName = "Joseph", firstLastName = "firstLastName", secondLastName = "secondLastName", email = "test001@hotmail.com", state = "Louisiana", city = "New Orleans", street = "2nd St", zip = "1241423", phone = "46524650", authPhone = false, authMail = true },
            new Company(){nit = "2322468", identificationType = "other", identificationNumber = "2102149823659", companyName   = "ARM", firstname = "Michelle", secondName = "Joseph", firstLastName = "firstLastName", secondLastName = "secondLastName", email = "test002@hotmail.com", state = "California", city = "San Francisco", street = "2nd St", zip = "1241423", phone = "46524650", authPhone = false, authMail = true },
            new Company(){nit = "2322469", identificationType = "foreign", identificationNumber = "2102149823659", companyName   = "NKK", firstname = "Michelle", secondName = "Joseph", firstLastName = "firstLastName", secondLastName = "secondLastName", email = "test003@hotmail.com", state = "California", city = "San Francisco", street = "2nd St", zip = "1241423", phone = "46524650", authPhone = false, authMail = true }
        });

        private readonly ILogger<CompanyController> _logger;

        public CompanyController(ILogger<CompanyController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{nit}")]
        public ResponseDto Get(string nit)
        {
            ResponseDto responseDto = new ResponseDto();
            try {
                if (nit == "2322466"){
                    responseDto.result = "failure";
                    responseDto.message = "The company(2322466) unable to register"; 
                    return  responseDto;              
                }
                var company = Companies.Where(e => e.nit == nit).ToList();  
                if (company.Count == 0)
                {
                    responseDto.result = "failure";
                    responseDto.message = "The company does not exist";
                }else{
                    responseDto.result = "success";
                    responseDto.company = company[0];        
                }
            } catch (Exception e) {
                responseDto.result = "failure";
                responseDto.message = e.Message;
            }
            return responseDto;
        }
    
        [HttpPost]
        public ResponseDto Post(Company company)
        {
            ResponseDto responseDto = new ResponseDto();
            try {
                var companies = Companies.Where(e => e.nit == company.nit).ToList();  
                if (companies.Count != 0)
                {
                    Companies.Remove(companies[0]); 
                }
                responseDto.result = "success";
                Companies.Add(company);
            } catch (Exception e) {
                responseDto.result = "failure";
                responseDto.message = e.Message;
            }
            return responseDto;
        }
    }
}
