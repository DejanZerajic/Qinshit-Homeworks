namespace SwapNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Input number one");
            string numberOne = Console.ReadLine();
            int parsedNumberOne = int.Parse(numberOne);
            Console.WriteLine(parsedNumberOne);

            Console.WriteLine("Input number two");
            string numberTwo = Console.ReadLine();
            int reallyparsedNumberTwo;
            bool tryParsing= int.TryParse(numberTwo, out reallyparsedNumberTwo);
            Console.WriteLine(reallyparsedNumberTwo);

            int swaping = parsedNumberOne;
            parsedNumberOne = reallyparsedNumberTwo;
            reallyparsedNumberTwo = swaping;

            Console.WriteLine("After Swaping:");
            Console.WriteLine($"First number is {parsedNumberOne}");
            Console.WriteLine($"Second number is {reallyparsedNumberTwo}");





        }
    }
}
