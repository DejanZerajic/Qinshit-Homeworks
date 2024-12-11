//postavuvam funkcija so eden parametar
function dataType(value) {
  let type = typeof value;
  console.log(`Data type is: ${type}`);
  return type;
}
//ja povikuvam funkcijata so agrumenti
dataType({});
dataType(false);
dataType(53.9);
dataType("Hello World");
dataType(undefined);
