using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System;

namespace lab_11.Models
{
    public class TaskModel
    {
        private const int MIN_NUM = 0;
        private const int MAX_NUM = 10;
        
        public int firstNum;
        public int secondNum;
        public char operation;
        
        public string result { get; set; }

        public bool resultRight;

        public void generateNewTask()
        {
            Random random = new Random();

            switch (random.Next(0, 3))
            {
                case 0:
                    operation = '+';
                    break;
                case 1:
                    operation = '-';
                    break;
                case 2:
                    operation = '*';
                    break;
                case 3:
                    operation = '/';
                    break;
            }

            firstNum = random.Next(MIN_NUM, MAX_NUM);
            secondNum = random.Next(MIN_NUM, MAX_NUM);

            while (secondNum == 0 && operation == '/')
                secondNum = random.Next(MIN_NUM, MAX_NUM);
        }

        public bool checkResult()
        {
            int dummyNum;
            if (!int.TryParse(result, out dummyNum))
            {
                resultRight = false;
                return false;
            }

            int realResNum = Int32.Parse(result);
            int trueResNum = 0;
            switch (operation)
            {
                case '+':
                    trueResNum = firstNum + secondNum;
                    break;
                case '-':
                    trueResNum = firstNum - secondNum;
                    break;
                case '*':
                    trueResNum = firstNum * secondNum;
                    break;
                case '/':
                    trueResNum = firstNum / secondNum;
                    break;
            }

            if (realResNum == trueResNum)
                resultRight = true;
            else
                resultRight = false;

            return resultRight;
        }
    }

    public class CollectionTasks
    {
        private static CollectionTasks collection = new CollectionTasks();
        public static ref CollectionTasks Instance()
        {
            return ref collection;
        }
        private CollectionTasks() { }

        List<TaskModel> tasks = new List<TaskModel>();
        
        public void add(TaskModel task)
        {
            tasks.Add(task);
            counterAllTasks++;
        }

        public void checkLast()
        {
            if (tasks.Last().checkResult())
                counterRightTasks++;
        }

        public List<TaskModel> getList()
        {
            return tasks;
        }

        public void clear()
        {
            counterAllTasks = 0;
            counterRightTasks = 0;

            tasks.Clear();
        }

        public int counterAllTasks = 0;
        public int counterRightTasks = 0;


    }
}