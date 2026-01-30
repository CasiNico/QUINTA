let old_num = document.getElementById(HidLab).value;
let new_num = document.getElementById(Lab).value;

function aggiungi(num) {
    n += String(num);
    document.getElementById("lab").textContent = n;
}

function op () {
    old_num = new_num;
}