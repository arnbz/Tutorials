//Global(name)
//->Local(name)
//->->Local()
//->Local()

let name = 'Arnab';

if (true) {
  //variable shadowing
  let name = 'Roy';

  if (true) {
    name = 'Arnab Roy';
    console.log(name); //prints 'Arnab Roy'
  }

  console.log(name); //prints 'Arnab Roy'
}

if (true) {
  console.log(name); //prints 'Arnab'
}
