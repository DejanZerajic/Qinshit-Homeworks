namespace AvarageNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
           
        //Slave, ne znam zosto loso mi go racuna prosekot od cetiri broja. Mu staviv float za da mi dava decvimala, ama ne ide.
        //Site metodi za parsing se razlicni za da gi vezbam.

         Console.WriteLine("Enter the first number:");
            string input1 = Console.ReadLine();
            int parsedInt1;
            bool realParsedInt1 = int.TryParse(input1, out parsedInt1);
            Console.WriteLine(parsedInt1);

            Console.WriteLine("Enter the second number:");
            string input2 = Console.ReadLine();
            int parsedInt2 = Convert.ToInt32(input2);
            Console.WriteLine(parsedInt2);

            Console.WriteLine("Enter the third number:");
            string input3 = Console.ReadLine();
            int parsedInt3 = int.Parse(input3);
            Console.WriteLine(parsedInt3);

            Console.WriteLine("Enter the fourth number:");
            string input4 = Console.ReadLine();
            int parsedInt4 = Convert.ToInt16(input4);
            Console.WriteLine(parsedInt4);

            float averageNumber = (parsedInt1 + parsedInt2 + parsedInt3 + parsedInt4) / 4;
            Console.WriteLine($"The average number of {parsedInt1}, {parsedInt2}, {parsedInt3} and {parsedInt4} is : {averageNumber}");






        }
    }
}
