const themeToggleBtn = document.getElementById("theme-toggle")
const darkSvg = document.getElementById("theme-toggle-dark-icon")
const lightSvg = document.getElementById("theme-toggle-light-icon")

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme:dark)").matches)
) {
  // Show light icon
  lightSvg.classList.remove("hidden")
} else {
  darkSvg.classList.remove("hidden")
}

themeToggleBtn.addEventListener("click", toggleMode)

function toggleMode() {
  // Toggle Icon
  darkSvg.classList.toggle("hidden")
  lightSvg.classList.toggle("hidden")

  // If is set in localStorage
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("color-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("color-theme", "light")
    }
  } else {
    // If not in localStorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("color-theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("color-theme", "dark")
    }
  }
}
