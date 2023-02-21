const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageindex) => {
    return `<button class='page-btn ${
      activeIndex === pageindex ? "active-btn" : "null"
    }' data-index="${pageindex}">${pageindex + 1}</btn>`
  })
  btns.push(`<button class="next-btn">next</button>`)
  btns.unshift(`<button class="prev-btn">prev</button>`)
  container.innerHTML = btns.join("")
}

export default displayButtons
