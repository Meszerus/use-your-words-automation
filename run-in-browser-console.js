const INPUT_CODE_MONKEY = "💀💀💀💀💀💀";
const INPUT_CALL_OF_DOODY = "💩💩💩💩💩";

let interactLock = false;
let inputCount = 0;

const mutationObserver = new MutationObserver((mutations) => {
	if(interactLock) {
		return;
	} else {
		interactLock = true;
	}
	
	for(let mutation of mutations) {
		if(mutation.type === "childList") {
			
			// Mode: Input
			if($("#answer").length > 0) {
				console.log("MODE: INPUT");
				setTimeout(() => {
					let answerText = inputCount % 15 === 0 ? INPUT_CODE_MONKEY : INPUT_CALL_OF_DOODY;
					$("#answer").text(answerText);
					inputCount++;
					console.log(`Entered text: ${answerText}`);
				}, 10);
				setTimeout(() => {
					if($("#button-enter").length > 0) {
						$("#button-enter").trigger("click");
						console.log("Clicked button: Submit");
					}
				}, Math.floor(Math.random() * 300) + 50);
			}
			
			// Mode: Vote
			if($("#HOUSE").length > 0) {
				console.log("MODE: VOTE");
				setTimeout(() => {
					let i = 1;
					let choiceMade = false;

					while(!choiceMade) {
						const $currentChoice = $(`#${i}`);

						if($currentChoice.length > 0 && $currentChoice.attr("disabled") !== "disabled") {
							$currentChoice.trigger("click");
							choiceMade = true;
							console.log(`Clicked option: #${i}`);
						} else if(i > 50) {
							$("#HOUSE").trigger("click");
							choiceMade = true;
							console.log(`Clicked house option, but only because something went wrong lol`);
						}

						i++;
					}
				}, 20);
				setTimeout(() => {
					if($("#button-enter").length > 0) {
						$("#button-enter").trigger("click");
						console.log("Clicked button: Vote");
					}
				}, Math.floor(Math.random() * 300) + 50);
			}
		}
	}
	
	interactLock = false;
});

mutationObserver.observe(document.getElementById("container"), { childList: true });