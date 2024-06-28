let x = document.getElementById("count");
let y = document.getElementById("minus");
let z = document.getElementById("plus");
let t = document.getElementById("reset");
let counte = 0;
z.onclick = function(){
    counte++;
    x.textContent = counte;
}
t.onclick = function(){
    counte=0;
    x.textContent = counte;
}
y.onclick = function(){
    counte--;
    x.textContent = counte;
}



