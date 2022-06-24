let two = document.querySelector('.opacity')
let active3 = document.querySelector('.active3')
let btn = document.querySelector('.pro')
let btn2 = document.querySelector('.pro2')
let sui = document.querySelector('.see2')
let see = document.querySelector('.see')
let digital_ = document.querySelector('.digital')

iphones = {
  black: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346288',
  blue: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346295',
  green: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385495',
  silver: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346280',
  gold: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346295'
}

let btns = document.querySelectorAll('.odin[data-color]')
let img = document.querySelector('.img')

for (let btn of btns) {
  btn.onclick = () => {
    let key = btn.innerHTML
    img.setAttribute('src', iphones[key])
  }
}

let box = document.querySelectorAll('.item')

box.forEach(item => {
  item.onclick = () => {
    item.classList.toggle
  }
})
see.onclick = () => {
  digital_.classList = "active"
}
sui.onclick = () => {
  digital_.classList = "active"
}
let allbtn = document.querySelectorAll('button')

for (let btnn of allbtn) {
  btnn.onclick = () => {
    btnn.style.border = "8px solid blue"
    btn.onclick = () => {
      two.classList = "active2"
      pro2.className = "pro_0"
    }
    btn2.onclick = () => {
      two.classList = "active2"
    }
  }
}