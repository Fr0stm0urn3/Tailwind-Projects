const formEl = document.getElementById("link-form")
const inputEl = document.getElementById("link-input")
const errEl = document.getElementById("err-message")

formEl.addEventListener("submit", formSubmit)

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  )
  return !!pattern.test(str)
}

function formSubmit(e) {
  e.preventDefault()

  if (inputEl.value === "") {
    errEl.innerHTML = "Please Enter Something"
    inputEl.classList.remove("border-white")
    inputEl.classList.add("border-red")
    return
  } else if (!validURL(inputEl.value)) {
    inputEl.classList.remove("border-white")
    inputEl.classList.add("border-red")
    errEl.innerHTML = "Please Enter A Valid Url"
  } else {
    errEl.innerHTML = ""
    inputEl.classList.remove("border-red")
    alert("Success")
  }
}

const menuEl = document.getElementById("menu")
const menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open")
  menuEl.classList.toggle("hidden")
})
