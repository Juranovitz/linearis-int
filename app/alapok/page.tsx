export default function TSalapokPage() {
  // Megjegyzés
  // JS/TS Egyszerű változótípusai
  // - szöveges típus (string)
  // - numerikus típus (number)
  // - logikai típus (boolean)

  // egyszerű változók definiálása
  // [const, let, var] változó_azonosítója: változó_típusa = kezdőérték
  // const - Ha a változó értéke a program futása alatt nem változik
  // let - Ha a változó értéke a program futása alatt változik
  // var - Elvileg a var is használható, de a linterek elavúlt scope-ja végett tíltják

  const szöveg: string = "Alma"; // "Alma" string literál
  const szöveg2: string = 'Körte "pálinka" ital';
  let a: number = 3;
  const b: number = 4 * a;
  a = 5;
  const valós: number = 3.14;
  const szöveg3: string = `${a} * ${b} = ${a * b}`; // template string literál
  const logikai1: boolean = true; // vagy false
  const logikai2: boolean = a > b;

  return (
    <div>
      <p>{szöveg}</p>
      <p>{szöveg2}</p>
      <p>{szöveg3}</p>
      <p>Pi: {valós}</p>
      <p>{logikai1 ? "true" : "false"}</p>
      <p>{logikai2 ? "true" : "false"}</p>
    </div>
  );
}
