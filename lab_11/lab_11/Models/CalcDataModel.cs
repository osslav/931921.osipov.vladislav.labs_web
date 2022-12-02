using System;

namespace lab_11.Models
{
    public class CalcDataModel
    {
        public const int MIN_NUM = 0;
        public const int MAX_NUM = 10;
        
        public int firstNum;
        public int secondNum;

        public int add;
        public int sub;
        public int mult;
        public string div;

        public CalcDataModel()
        {
            Random random = new Random();
            
            firstNum = random.Next(MIN_NUM, MAX_NUM);
            secondNum = random.Next(MIN_NUM, MAX_NUM);

            add = firstNum + secondNum;
            sub = firstNum - secondNum;
            mult = firstNum * secondNum;

            if (secondNum != 0)
                div = (firstNum / secondNum).ToString();
            else
                div = "inf";
        }
    }
}