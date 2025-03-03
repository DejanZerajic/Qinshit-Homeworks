namespace RealCalculator
{
    internal class Program
    {
        static void Main(string[] args)
            //Slave, ne bi go pravel cel kalkulator deneska, ke go pocekam sledniot cas,
            //da zememe za branching. Ova e samo za sobiranje na dva broja.
        {
            Console.WriteLine("Enter first number:");
                string stringOne = Console.ReadLine();
                        int parsedstringOne;
            bool reallyParsedNumberOne = int.TryParse(stringOne, out parsedstringOne);

            Console.WriteLine(parsedstringOne);

            Console.WriteLine("Enter second numer:");
            string stringTwo = Console.ReadLine();
            int parsedStringTwo;
            bool reallyParsedNumberTwo = int.TryParse(stringTwo, out parsedStringTwo);
                Console.WriteLine(parsedStringTwo);
            int sum = parsedstringOne + parsedStringTwo;
            Console.WriteLine($"The sum of {parsedstringOne} and {parsedStringTwo} is {sum}");


        }
    }
}
