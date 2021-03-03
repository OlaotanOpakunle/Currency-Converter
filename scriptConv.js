const num = document.querySelector("#num");
// console.log(num.value);
const btn = document.querySelector("#btn");
// console.log(btn);
const num2 = document.querySelector("#num2");
// console.log(num2);
let toShow = document.querySelector("#loa");
// console.log(loaq);

$.ready(
    console.log("how far???")
)
$.ajax({
    url: "https://api.ratesapi.io/api/latest",
    type:"GET",
    success: (data)=>{
        // console.log([data.rates["USD"]]);
        console.log(Number(data.rates["USD"]));
        let m = Number(data.rates["USD"]);
        console.log(m);

        btn.addEventListener("click", (e)=>{
            num2.value = m * num.value;
        });      
        toShow.append(`Current USD to EUR rate is: ${Number([data.rates["USD"]])}`);
        },
    error: (err)=>{
        console.log(err);
        console.log("no show");
  }
});
