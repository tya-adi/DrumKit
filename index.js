

function actionToPerform(classOfButton){
	
	buttonAnimation(classOfButton);
	
	switch(classOfButton)
	{
		case "w":new Audio("sounds/crash.mp3").play(); break;
		case "a":new Audio("sounds/kick-bass.mp3").play(); break;
		case "s":new Audio("sounds/snare.mp3").play(); break;
		case "d":new Audio("sounds/tom-1.mp3").play(); break;
		case "j":new Audio("sounds/tom-2.mp3").play(); break;
		case "k":new Audio("sounds/tom-3.mp3").play(); break;
		case "l":new Audio("sounds/tom-4.mp3").play(); break;
		
		default: console.log(this.innerHTML);
	}
	
} 









var n = document.querySelectorAll(".drum").length;

for(var i = 0;i<n;i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		
		var classOfButton = this.classList[0];
		
		actionToPerform(classOfButton);
		
	});
}





document.addEventListener("keypress",function(event){
	
	actionToPerform(event.key);
	console.log(event.key);
});







function buttonAnimation(currentKey)

{
	var activeButton = document.querySelector("."+currentKey);
	
	activeButton.classList.add("pressed");
	
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},100);
}








// function handleClick(){
	
// 	var audio = new Audio("sounds/tom-2.mp3");
// 	audio.play();
// }

