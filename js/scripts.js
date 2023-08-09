window.onload = function() {
  let form = document.querySelector("form");
  const span = document.querySelector("span");
  let textSize = span.style.fontSize;

  form.onsubmit = function(e) {
    const input = document.getElementById("input").value;
    document.querySelector("span").innerText = input.toUpperCase();
    e.preventDefault();

    textSize = textSize + 1 + "px";
    console.log(textSize);
  }
  // document.querySelector("span").style.fontSize = "larger";
}