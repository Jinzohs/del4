const ljudSpel = {
	"ljud":[
{"audio": "audio/aaa.mp3"},
{"audio": "audio/bbb.mp3"},
{"audio": "audio/ccc.mp3"},
{"audio": "audio/ddd.mp3"},
{"audio":"audio/eee.mp3" },
{"audio":"audio/fff.mp3" },
{"audio":"audio/ggg.mp3" },
{"audio":"audio/hhh.mp3" },
{"audio":"audio/jjj.mp3" },
{"audio":"audio/kkk.mp3" },
{"audio":"audio/lll.mp3" },
{"audio":"audio/mmm.mp3" },
{"audio":"audio/sound13.mp3" },
{"audio":"audio/sound14.mp3" },
{"audio":"audio/sound15.mp3" },
{"audio":"audio/sound16.mp3" },
{"audio":"audio/sound17.mp3" },
{"audio":"audio/sound18.mp3" },
{"audio":"audio/sound19.mp3" },
{"audio":"audio/sound20.mp3" },
{"audio":"audio/sound21.mp3" },
{"audio":"audio/sound22.mp3" },
{"audio":"audio/sound23.mp3" },
{"audio":"audio/sound24.mp3" },
{"audio":"audio/sound25.mp3" }
	]
};


function loadpad1() {
    let pad1Container = document.getElementById('pad1');
    let pad2Container = document.getElementById('pad2');
    

   pad1Container.innerHTML = '';
   pad2Container.innerHTML = '';   //Tar bort tidigare knappar
	
//Sätt dit nya knappar med nummror i, med tryck function för både mus och tangentbord
    for (let i = 1; i <= 12; i++) {
        let pad = document.createElement('div');
        pad.className = 'btn';
        pad.id = `btn${i}`;
		pad.textContent = `Button ${i}`;
		pad.addEventListener ('click', function () {
		const audio = new Audio(ljudSpel.ljud[i].audio);	
		audio.play(); 
		});
        pad.setAttribute('tabindex', '0');
        pad1Container.appendChild(pad);  
    }

//Lyssnar på tryck från tangentbord
        document.addEventListener('keydown', function(event) {
            const keyToButtonMap = {
                'q': 1,
                'w': 2,
                'e': 3,
                'r': 4,
                't': 5,
                'y': 6,
                'a': 7,
                's': 8,
                'd': 9,
                'f': 10,
                'g': 11,
                'h': 12,

            };
			//Reagerar på knapptryck från tangentbord
            const buttonIndex = keyToButtonMap[event.key.toLowerCase()];
            if (buttonIndex !== undefined) {
               const button = pad1Container.querySelector(`#btn${buttonIndex}`);
            button.click();
			button.focus();
			}
        });
    }

function loadpad2() {
    let pad1Container = document.getElementById('pad1');
    let pad2Container = document.getElementById('pad2');
    
//tar bort tidigare knappar
 pad1Container.innerHTML = '';  
 pad2Container.innerHTML = '';  

	
		//Sätter dit likadana knappar som tidigare men med id 13-25
	    for (let i = 13; i <= 24; i++) {
        let pad = document.createElement('div');
        pad.className = 'btn';
        pad.id = `btn${i}`;
		pad.textContent = `Button ${i}`;
		pad.addEventListener ('click', function () {
		const audio = new Audio(ljudSpel.ljud[i].audio);	
		audio.play();
		});
        pad.setAttribute('tabindex', '0');
        pad1Container.appendChild(pad);  
}
        document.addEventListener('keydown', function(event) {
            const keyToButtonMap = {
                'q': 13,
                'w': 14,
                'e': 15,
                'r': 16,
                't': 17,
                'y': 18,
                'a': 19,
                's': 20,
                'd': 21,
                'f': 22,
                'g': 23,
                'h': 24,

            };

            const buttonIndex = keyToButtonMap[event.key.toLowerCase()];
            if (buttonIndex !== undefined) {
                const button = pad1Container.querySelector(`#btn${buttonIndex}`);
            button.click();
			button.focus();
            }
        });
}

//mainmenu funtion som tar bort alla knappar
function mainMenu() {
    let pad1Container = document.getElementById('pad1');
    let pad2Container = document.getElementById('pad2');
    

 pad1Container.innerHTML = '';  
 pad2Container.innerHTML = '';  
}