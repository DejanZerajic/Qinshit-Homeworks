function atm() {
  let myBalance = 1000;

  let input = prompt("Enter the amount to withdraw:");
  let amountWithdraw = parseInt(input); //go parsiram vnesot za da bide number

  if (amountWithdraw > myBalance) {
    alert("Not enough funds.\n Please try with smaller amount."); //uslov, ako bara poveke pari, atm-ot odbiva isplata
  } else {
    myBalance -= amountWithdraw;
    alert(
      `Success! You withdrew ${amountWithdraw} from your account.\n Remaining: ${myBalance} funds`
    ); //vo sprotivno, atm-ot isplakja pari i dava izvestuvanje kolku pari ostanale.
  }
}

atm();
