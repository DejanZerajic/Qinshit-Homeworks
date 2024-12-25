function createDynamicTable() {
  // Baram vnes od korisnikot
  const rows = parseInt(prompt("Enter the number of rows:"));
  const cols = parseInt(prompt("Enter the number of columns:"));

  // Validiram vnes, ne smee da bide pomalo od nula
  if (rows <= 0 || cols <= 0) {
    alert("Please enter valid numbers for rows and columns.");
    return;
  }

  // Pravam table
  const table = document.createElement("table"); // pravam table
  table.style.borderCollapse = "collapse"; //CSS naredba, borderot da bide ist za site
  table.style.width = "100%";

  for (let i = 1; i <= rows; i++) {
    //sozdavam <tr> i <td> elementi za tabelata so iteratori i i k
    const tr = document.createElement("tr");
    for (let k = 1; k <= cols; k++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${k}`;
      td.style.border = "1px solid black"; //CSS finti za border, padding i slicno
      td.style.padding = "8px";
      td.style.textAlign = "center";
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  const container = document.getElementById("table-container"); // ja lepam tabelata na kontejner
  container.appendChild(table);
}
