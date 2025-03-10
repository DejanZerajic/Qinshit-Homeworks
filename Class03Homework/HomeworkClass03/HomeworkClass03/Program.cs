using System;
using System.Globalization;

//Task 1
//Make a console application called SumOfEven.
//Inside it create an array of 6 integers.
//Get numbers from the input,
//find and print the sum of the even numbers from the array:


int[] numbers = new int[6]; //kreiram niza bez vrednosti sto ke sodrzi 6 brojki
int sum = 0; //inicijaliziram promenliva sto na krajot ke go sodrzi zbirot od parnite broevi

for (int i = 0; i < numbers.Length; i++) // loop za da gi dobijam parsirani vrednostite od inputot
{
    Console.Write($"Enter integer no.{i + 1}: ");
    numbers[i] = int.Parse(Console.ReadLine());
}

for (int i = 0; i < numbers.Length; i++) //ovde gi baram parnite broevi od inputot i gi sobiram
{
    if (numbers[i] % 2 == 0)
    {
        sum += numbers[i];
    }
}

Console.WriteLine($"The result is: {sum}"); //rezultatot mi e vo sum sto ja inijacilizirav na pocetokot



//Task 2
//Make a new console application called StudentGroup
//Make 2 arrays called studentsG1 and studentsG2 and fill them with 5 student names.
//Get a number from the console between 1 and 2 and print the students from that group in the console.
//Example: studentsG1["Zdravko", "Petko", "Stanko", "Branko", "Trajko"]string[] studentsG1 = { "Zdravko", "Petko", "Stanko", "Branko", "Trajko" };
  
    
string[] studentsG1 = { "Zdravko", "Petko", "Stanko", "Branko", "Trajko" };//definiram dve nizi
string[] studentsG2 = { "Ana", "Elena", "Marko", "Stefan", "Nikola" };

Console.Write("Enter student group: (1 or 2) "); //baram input od user za grupata
int group = int.Parse(Console.ReadLine()); //go parsiram inputot

if (group == 1)
{
    Console.WriteLine("The Students in G1 are:"); //Ja postavuvam komandnata struktura
    foreach (string student in studentsG1)        //za izbor 1, 2 ili nevaliden input
    {
        Console.WriteLine(student);
    }
}
else if (group == 2)
{
    Console.WriteLine("The Students in G2 are:");
    foreach (string student in studentsG2)
    {
        Console.WriteLine(student);
    }
}
else
{
    Console.WriteLine("Invalid group number. Please enter 1 or 2.");
}