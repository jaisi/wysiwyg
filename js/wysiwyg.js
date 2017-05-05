
console.log("i am here");

var person = [
				{
				  title: "Samurai1",
				  name: "Tomoe1 Gozen1",
				  bio: "111Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
				  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
				  lifespan: {
				  birth: 1747,
				  death: 1797
	  			  }
	  			},
	  			{
				  title: "Samurai2",
				  name: "Tomoe2 Gozen2",
				  bio: "222Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
				  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
				  lifespan: {
				  birth: 1747,
				  death: 1797
	  			  }
	  			},
	  			{
				  title: "Samurai3",
				  name: "Tomoe3 Gozen3",
				  bio: "333Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
				  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
				  lifespan: {
				  birth: 1747,
				  death: 1797
	  			  }
	  			}

  ]

var counter = 0;
var outputEl = document.getElementById("outputEl");
for (; counter < person.length; counter++) {
  	
						// Give each person element a unique identifier
						outputEl.innerHTML += `<div class="person__container" id="person--${counter}">
	  					<header id="header--${counter}"><h1>${person[counter].title}</h1><blockquote>${person[counter].name}</blockquote></header>
	  					<section id="section--${counter}" class="bio">${person[counter].bio}<p> ${person[counter].image}</p></section>
	  					
	  					<footer id="footer--${counter}">${person[counter].lifespan.birth}-${person[counter].lifespan.death}</footer></div></div>`;
	
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

//clear textbox input when return or enter is pressed
var textInput = document.getElementById("input");
textInput.addEventListener("keyup", handleClear);


function handleClear(event){

	  //check to see if the enter key was pressed
	  if (event.which === 13) {
	    textInput.value = "";
	  }
}	


var container;
// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
	  	containerEl.item(i).addEventListener("click", function (event1) {
	    
	    	//logic for bordered
		    event1.target.closest("div").classList.toggle("bordered");
		    textInput.focus();

		   container = event1.currentTarget;
		  
		   textInput.addEventListener("keypress", function(event2){
		    		container.querySelector("section").innerHTML = input.value;		
		    })
	    
	  	});

	  	
	}
















