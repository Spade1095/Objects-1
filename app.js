


//  console.log(x);
// x.style.backgroundColor = "red";

// let y = document.getElementById("color");
// y.style.color = "yellow";
// y.textContent = "Hello World";

function getRGB(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let box = document.querySelector(".box");
    box.computedStyleMap.backgroundColor=`rgb(${r},${g},${b})`;
    header.textContent = `rgb(${r},${g},${b})`;
}

function inject(){
    const box = document.querySelector(".box");
    box.insertAdjacentHTML("afterbegin",`<h2 class = "test>Inserted<h2/>`)
}
const header = document.getElementById("color");
let x = 0;
document.getElementById("btn").addEventListener("click", function(){
    getRGB();
    inject();
});