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
window.addEventListener("load", init)
