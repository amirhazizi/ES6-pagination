import fetchFollowers from "./fetchFollowers.js"
import displayFollowers from "./displayFollowers.js"
import paginate from "./paginate.js"
import displayButtons from "./displayButtons.js"

const title = document.querySelector(".section-title h1")
const btnContainer = document.querySelector(".btn-container")

let index = 0
let page = []
const setupUI = () => {
  displayFollowers(page[index])
  displayButtons(btnContainer, page, index)
}
const init = async () => {
  const followers = await fetchFollowers()
  // displayFollowers(followers)
  title.textContent = "Pagination"
  page = paginate(followers)
  setupUI()
}
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-container")) return
  if (e.target.classList.contains("page-btn"))
    index = parseInt(e.target.dataset.index)
  if (e.target.classList.contains("next-btn")) {
    index++
    if (index > page.length - 1) index = 0
  }
  if (e.target.classList.contains("prev-btn")) {
    index--
    if (index < 0) index = page.length - 1
  }

  setupUI()
})
window.addEventListener("load", init)
