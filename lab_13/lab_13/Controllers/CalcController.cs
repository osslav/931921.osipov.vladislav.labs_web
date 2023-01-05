using lab_11.Models;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.Diagnostics;

namespace lab_11.Controllers
{
    public class CalcServiceController : Controller
    {
        private readonly ILogger<CalcServiceController> _logger;

        public CalcServiceController(ILogger<CalcServiceController> logger)
        {
            _logger = logger;
        }

        public IActionResult Manual()
        {
            if (Request.Method != "POST")
                return View();
            else
            {
                CalcDataModel model = new CalcDataModel();
                model.firstNum = Request.Form["firstNum"];
                model.secondNum = Request.Form["secondNum"];
                model.operation = Request.Form["operation"];
                model.showOperation = false;

                model.calculation();

                ViewBag.dataModel = model;
                
                return View("ResultPage");
            }
        }

        [HttpGet]
        public IActionResult ManualWithSeparateHandlers()
        {
            return View();
        }
        [HttpPost]
        public IActionResult ManualWithSeparateHandlers(int dummyNum)
        {
            CalcDataModel model = new CalcDataModel();
            model.firstNum = Request.Form["firstNum"];
            model.secondNum = Request.Form["secondNum"];
            model.operation = Request.Form["operation"];
            model.showOperation = false;

            model.calculation();

            ViewBag.dataModel = model;

            return View("ResultPage");
        }

        [HttpGet]
        public IActionResult ModelBindingInParameters()
        {
            return View();
        }
        [HttpPost]
        public IActionResult ModelBindingInParameters(string firstNum, string secondNum, string operation)
        {
            CalcDataModel model = new CalcDataModel();
            model.firstNum = firstNum;
            model.secondNum = secondNum;
            model.operation = operation;
            model.showOperation = true;

            model.calculation();

            ViewBag.dataModel = model;

            return View("ResultPage");
        }

        [HttpGet]
        public IActionResult ModelBindingInSeparateModel()
        {
            return View();
        }
        [HttpPost]
        public IActionResult ModelBindingInSeparateModel(CalcDataModel model)
        {          
            model.calculation();
            model.showOperation = true;
            ViewBag.dataModel = model;

            return View("ResultPage");
        }

    }
}