let contain = document.getElementById("contain");
// start cycle
for (let i = 0; i < 101; i++) {
let newDiv= document.createElement("div");
// start switch
switch (true) {
  case (i==0):
    console.log(i);
    newDiv.innerHTML = i;
    newDiv.classList.add("bg-primary");
    break;
  case (i%3 == 0 && i%5 == 0):
    console.log("FizzBuzz");
    newDiv.innerHTML = "FizzBuzz" ;
    newDiv.classList.add("bg-danger");
    break;
  case (i%3 == 0):
    console.log("Fizz");
    newDiv.innerHTML = "Fizz" ;
    newDiv.classList.add("bg-success");
    break;
  case (i%5 == 0):
    console.log("Buzz");
    newDiv.innerHTML = "Buzz" ;
    newDiv.classList.add("bg-dark");
    break;
  default:
    console.log(i);
    newDiv.innerHTML = i;
    newDiv.classList.add("bg-primary");
    break;
}
// add class to div in html
newDiv.classList.add("square", "text-center" );
    contain.append(newDiv);
};