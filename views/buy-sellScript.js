function BuyPage() {
	SwitchBuy.style.border = '0.2vw solid aquamarine'
    SwitchSell.style.border = '0'
    SwitchBuyPage.style.visibility = 'visible'
    SwitchSellPage.style.visibility = 'hidden'
}
function SellPage() {
	SwitchBuy.style.border = '0'
    SwitchSell.style.border = '0.2vw solid aquamarine'
    SwitchBuyPage.style.visibility = 'hidden'
    SwitchSellPage.style.visibility = 'visible'
}

let imgInput1 = document.querySelector("#selectImg1")
let previewImg1 =document.querySelector("#previewImg1")

imgInput1.onchange = evt => {
	const[file] = imgInput1.files
		if (file) {
			previewImg1.src = URL.createObjectURL(file)
		}	
}
let imgInput2 = document.querySelector("#selectImg2")
let previewImg2 =document.querySelector("#previewImg2")

imgInput2.onchange = evt => {
	const[file] = imgInput2.files
		if (file) {
			previewImg2.src = URL.createObjectURL(file)
		}	
}
let imgInput3 = document.querySelector("#selectImg3")
let previewImg3 =document.querySelector("#previewImg3")

imgInput3.onchange = evt => {
	const[file] = imgInput3.files
		if (file) {
			previewImg3.src = URL.createObjectURL(file)
		}	
}
let imgInput4 = document.querySelector("#selectImg4")
let previewImg4 =document.querySelector("#previewImg4")

imgInput4.onchange = evt => {
	const[file] = imgInput4.files
		if (file) {
			previewImg4.src = URL.createObjectURL(file)
		}	
}
let imgInput5 = document.querySelector("#selectImg5")
let previewImg5 =document.querySelector("#previewImg5")

imgInput5.onchange = evt => {
	const[file] = imgInput5.files
		if (file) {
			previewImg5.src = URL.createObjectURL(file)
		}	
}
let imgInput6 = document.querySelector("#selectImg6")
let previewImg6 =document.querySelector("#previewImg6")

imgInput6.onchange = evt => {
	const[file] = imgInput6.files
		if (file) {
			previewImg6.src = URL.createObjectURL(file)
		}	
}
let imgInput7 = document.querySelector("#selectImg7")
let previewImg7 =document.querySelector("#previewImg7")

imgInput7.onchange = evt => {
	const[file] = imgInput7.files
		if (file) {
			previewImg7.src = URL.createObjectURL(file)
		}	
}
let imgInput8 = document.querySelector("#selectImg8")
let previewImg8 =document.querySelector("#previewImg8")

imgInput8.onchange = evt => {
	const[file] = imgInput8.files
		if (file) {
			previewImg8.src = URL.createObjectURL(file)
		}	
}