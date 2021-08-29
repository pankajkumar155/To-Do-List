function addMore() {
    document.getElementById("error").innerHTML = "";
    let name = document.getElementById("name").value;
    if (name == '') {
        document.getElementById("error").innerHTML = "Please, enter something.";

    } else {
        let box = document.getElementById("box");
        let li = document.createElement("li");
        li.innerHTML = name;
        let a = document.createElement("a");
        a.innerHTML = "X";
        a.href = "javascript:void(0)";
        a.className = "remove";
        li.appendChild(a);
        let pos = box.firstElementChild;
        if (pos == null) {
            box.appendChild(li);
        } else {
            box.insertBefore(li, pos);
        }


    }
    document.getElementById("name").value = "";
}
let btn = document.getElementById("box");
btn.addEventListener('click', function (e) {

    let litt = e.target.parentNode;
    box.removeChild(litt);

}
)

let btn1 = document.getElementById("btnClick1");
btn1.addEventListener('click', function () {
    document.getElementById("box").innerHTML = "";
})
