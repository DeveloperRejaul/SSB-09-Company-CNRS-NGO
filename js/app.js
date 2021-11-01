// =========== Define variable =================

const acc = document.querySelector(".accordion");
const panel = document.querySelector(".panel");
const dakBtn = document.getElementById("Dark-btn");



// =========== Nav Menu Accordion =================
acc.addEventListener("mouseover", ()=>{
  acc.classList.add("active")
})
panel.addEventListener("mouseover", ()=>{
  acc.classList.add("active")
})
acc.addEventListener("mouseout", ()=>{
  acc.classList.remove("active")
})
panel.addEventListener("mouseout", ()=>{
  acc.classList.remove("active")
})



// =========== Dark and light Mode =================

dakBtn.onclick = function () {
  dakBtn.classList.toggle('dark-bnt-on');
  document.body.classList.toggle('dark-thim');

  if(localStorage.getItem("thime") == "light"){
    localStorage.setItem("thime", "dark");
  }else{
    localStorage.setItem("thime", "light");
  }

}

if (localStorage.getItem("thime") == "light") {
  dakBtn.classList.remove('dark-bnt-on');
  document.body.classList.remove('dark-thim');
}else if (localStorage.getItem("thime") == "dark") {
  dakBtn.classList.add('dark-bnt-on');
  document.body.classList.add('dark-thim');
}else {
  localStorage.setItem("thime", "light");
}
