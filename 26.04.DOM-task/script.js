//createElement
const startBtn = document.createElement("button");
const pTime = document.createElement("p");
const form = document.createElement("form");
const labelName = document.createElement("label");
const inputName = document.createElement("input");
const labelSurname = document.createElement("label");
const inputSurname = document.createElement("input");
const checkbox = document.createElement("input");
const radio1 = document.createElement("input");
const radio2 = document.createElement("input");
const submitBtn = document.createElement("button");
const nextBtn = document.createElement("button");

let time = 15;
//append
document.body.append(startBtn);
document.body.append(pTime);
document.body.append(form);
document.body.append(nextBtn);

form.append(labelName);
form.append(inputName);
form.append(labelSurname);
form.append(inputSurname);
form.append(checkbox);
form.append(radio1);
form.append(radio2);
form.append(submitBtn);

//setAtribute
inputName.setAttribute("required", "");
inputSurname.setAttribute("required", "");
checkbox.setAttribute("required", "");
radio1.setAttribute("required", "");
radio2.setAttribute("required", "");
submitBtn.setAttribute("disabled", "");

//radio
radio1.type = "radio";
radio1.name = "radio";
radio1.id = "radio1";

radio2.type = "radio";
radio2.name = "radio";
radio2.id = "radio1";
//checkbox
checkbox.type = "checkbox";
checkbox.name = "checkbox";
checkbox.style.borderBlockColor='red'
//style of form
form.style.height = "100vh";
form.style.border = "1px dashed black";
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.flexDirection = "column";
form.style.gap = "19px";
//style of p
pTime.style.width = "80px";
pTime.style.border = "1px solid black";
pTime.style.padding = "5px";
//checkbox style
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    checkbox.style.accentColor = "red";
  }
});

//submitBtn
startBtn.addEventListener("click", function () {
  submitBtn.removeAttribute("disabled");
});

//text
labelName.innerHTML = "Name";
labelSurname.innerHTML = "Surname";
submitBtn.innerHTML = "Submit";
startBtn.innerHTML = "Lets start";
pTime.innerHTML = `00: ${time}`;
nextBtn.innerHTML = 'Next';
//interval

startBtn.addEventListener("click", function () {
  const interval = setInterval(() => {
    time -= 1;
    if (time < 0) {
      time = 0; 
    }
    pTime.innerHTML = `00:${time}`;
    if (time === 9) {
      pTime.style.color = "red";
      pTime.style.border = "1px solid red";
    }
    if (time === 0) {
      clearInterval(interval);
      pTime.innerHTML = "u missed:(";
    }
  }, 1000);
});
//nextbtn
nextBtn.setAttribute('disabled','')
nextBtn.addEventListener("click", function () {
    alert("you finished")
})
submitBtn.addEventListener("click", function () {
 
    nextBtn.removeAttribute("disabled");
  
});