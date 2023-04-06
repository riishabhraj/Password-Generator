let gen_pass=document.getElementById("gen_pass")
let span=document.getElementById("span")
let del_pass=document.getElementById("del_pass")

class password {
  constructor() {
    this.uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.lChar = "abcdefghijklmnopqrstuvwxyz";
    this.numbers = "1234567890";
    this.symbols = "$*_-@&?!#/(<^>)[|]+=~";
  }

  genStrongPassword() {
    let strongArr = [this.uChar, this.lChar, this.numbers, this.symbols];
    let pass = "";
    for (let i = 0; i < 8; i++) {
      let randomGeneratorA = Math.floor(Math.random() * strongArr.length);
      let randomGeneratorB = Math.floor(Math.random() * strongArr[randomGeneratorA].length);

      pass = pass + strongArr[randomGeneratorA][randomGeneratorB];
    }
    return pass;
  }
}

let a = new password;

gen_pass.addEventListener('click', (e) => {
    e.preventDefault();
    span.textContent = "Your Password is : "+ a.genStrongPassword()
  })

del_pass.addEventListener("click",()=>{
    span.textContent="";
})



