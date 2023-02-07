// let myArr=[];
// let menuIcon = document.querySelector(".menu__icon");
// let body = document.querySelector("body");
// myArr.push(menuIcon)
// myIcon.addEventListener("click",()=>{
// 	myArr.forEach(element=>{
// 		element.classList.toggle("active")
// 	});
// 	body.classList.toggle("lock")
// })
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

let iconMenu=document.querySelector(".icon-menu");
		let body=document.querySelector("body");
		let menuBody=document.querySelector(".menu__body");
	iconMenu.addEventListener("click", (e) => {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});


	