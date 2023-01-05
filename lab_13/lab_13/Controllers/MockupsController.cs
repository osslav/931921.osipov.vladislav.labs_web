using lab_11.Models;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.Diagnostics;
using static System.Net.Mime.MediaTypeNames;

namespace lab_11.Controllers
{
    public class MockupsController : Controller
    {
        private readonly ILogger<MockupsController> _logger;

        public MockupsController(ILogger<MockupsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Quiz()
        {
            TaskModel model = new TaskModel();
            model.generateNewTask();
            CollectionTasks.Instance().add(model);

            return View(model);
        }

        [HttpPost]
        public IActionResult Quiz(string result, string action)
        {
            CollectionTasks.Instance().getList().Last().result = result;
            CollectionTasks.Instance().checkLast();

            if (action == "Finish")
                return RedirectToAction("QuizResult");


            TaskModel model = new TaskModel();
            model.generateNewTask();
            CollectionTasks.Instance().add(model);

            return View(model);
        }

        public IActionResult QuizResult()
        {
            return View(CollectionTasks.Instance());
        }

    }
}