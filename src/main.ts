/** @format */

import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="container">
<input type="text" id="inputFild" placeholder="0" disabled="true">
<div class="numbers">
  <button type="button" class="btn" data-value="c">CC</button>
  <button type="button" class="btn"  data-value="x">DEL</button>
  <button type="button" class="btn" data-value="%">%</button>
  <button type="button" class="btn" data-value="/">/</button>
  <button type="button" class="btn" data-value="7">7</button>
  <button type="button" class="btn" data-value="8">8</button>
  <button type="button" class="btn" data-value="9">9</button>
  <button type="button" class="btn" data-value="*">*</button>
  <button type="button" class="btn" data-value="4">4</button>
  <button type="button" class="btn" data-value="5">5</button>
  <button type="button" class="btn" data-value="6">6</button>
  <button type="button" class="btn" data-value="-">-</button>
  <button type="button" class="btn" data-value="1">1</button>
  <button type="button" class="btn" data-value="2">2</button>
  <button type="button" class="btn" data-value="3">3</button>
  <button type="button" class="btn" data-value="+">+</button>
  <button type="button" class="btn" data-value="00">00</button>
  <button type="button" class="btn" data-value="0">0</button>
  <button type="button" class="btn" data-value=".">.</button>
  <button type="button" class="btn" data-value="=">=</button>
</div>
</div>
`;
const btn = document.querySelectorAll("button")!;
// const numb = document.querySelector<HTMLDivElement>(".numbers")!
const inputfild = document.querySelector<HTMLInputElement>("#inputFild")!;

btn.forEach((num) => {
	// console.log(num);
	num.addEventListener("click", (event: any) => {
		let n = event.target.dataset.value;
		console.log(n);
		calculation(n);
	});
});
let output = "";
let specialCharacter = ["+", "-", "*", "/", "%", "x"];
const calculation = (btnVal: any) => {
	if (btnVal === "=" && output === "") return output;
	else if (btnVal === "=" && btnVal !== "") {
		output = eval(output.replace("%", "/100"));
	} else if (btnVal === "c") output = "";
  else if (output !== "" && btnVal === "x") output = output.toString().slice(0, -1);
	else if (output === "" && specialCharacter.includes(btnVal)) return output;
	else {
    // if(btnVal.startsWith('0'))
		output += btnVal;
    // btnVal=btnVal.slice(1,);
	}
	inputfild.value = output;
};
