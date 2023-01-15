import "./style.css"

document.querySelector("#app").innerHTML = `
 <header>
        <h1>Filtrando Cards</h1>
        <div class="wrapper-input">
          <input type="text" placeholder="Filtrar" />
          <i class="ph-magnifying-glass-bold"></i>
        </div>
      </header>
      <main>
        <ul>
          <li>
            <div class="header">
              <i class="ph-file-js-bold"></i>
              <h2>Javascript</h2>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              libero ex est. Quae dignissimos ratione illum quasi itaque
              perferendis voluptas totam cupiditate rem magnam! Dolor doloremque
              voluptate ad quas optio.
            </p>
          </li>
          <li>
            <div class="header">
              <i class="ph-angular-logo-bold"></i>
              <h2>Angular</h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              inventore ipsa facilis facere earum maiores reiciendis rem
              obcaecati, beatae cupiditate est sed a minima accusantium
              blanditiis quas deleniti nostrum debitis.
            </p>
          </li>
          <li>
            <div class="header">
              <i class="ph-google-chrome-logo-bold"></i>
              <h2>Google</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              ipsam quas eius harum iste libero, deleniti in, maiores dolorum
              neque dicta fugiat sequi magni sunt repudiandae! A laudantium
              maxime blanditiis.
            </p>
          </li>
          <li>
            <div class="header">
              <i class="ph-android-logo-bold"></i>
              <h2>Android</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              dolorem est, cupiditate quos fugit voluptatibus incidunt unde!
              Accusantium, quasi facilis aut iste velit nam omnis sunt
              reprehenderit, vel odio fugit.
            </p>
          </li>
        </ul>
      </main>
`

let filterElement = document.querySelector("input")

let cards = document.querySelectorAll("ul li")

filterElement.addEventListener("input", filterAction)

function filterAction() {
  // if the filter is not empty
  if (filterElement.value !== "") {
    for (let card of cards) {
      let title = card.querySelector("h2")

      title = title.textContent.toLowerCase()

      let filterTextLowerCase = filterElement.value.toLowerCase()

      if (!title.includes(filterTextLowerCase)) {
        card.style.display = "none"
      } else {
        card.style.display = "block"
      }
    }
  } else {
    // for each card of cards
    for (let card of cards) {
      // display the card element
      card.style.display = "block"
    }
  }
}
