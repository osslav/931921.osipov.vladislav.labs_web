using System;

namespace lab_11.Models
{
    public class CalcDataModel
    {
        public string firstNum { get; set; }
        public string secondNum { get; set; }
        public string operation { get; set; }
        public int resNum;

        public bool showOperation = false;
        public bool errorEmpty;
        public bool errorDivZero;
        public bool errorUnknown;

        public void calculation()
        {
            char operationChar = Convert.ToChar(operation);
            errorDivZero = false;
            errorUnknown = false;

            int dummyNum;
            if (int.TryParse(firstNum, out dummyNum) && int.TryParse(secondNum, out dummyNum))
            {
                errorEmpty = false;
            }
            else
            {
                errorEmpty = true;
                return;
            }

            int firstNumInt = Int32.Parse(firstNum);
            int secondNumInt = Int32.Parse(secondNum);
            switch (operationChar)
            {
                case '+':
                    resNum = firstNumInt + secondNumInt;
                    break;
                case '-':
                    resNum = firstNumInt - secondNumInt;
                    break;
                case '*':
                    resNum = firstNumInt * secondNumInt;
                    break;
                case '/':
                    if (secondNumInt != 0)
                        resNum = firstNumInt / secondNumInt;
                    else
                        errorDivZero = true;
                    break;
                default:
                    errorUnknown = true;
                    break;
            }
        }
    }
}