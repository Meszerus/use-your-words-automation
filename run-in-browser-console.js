const INPUT_CODE_MONKEY = "💀💀💀💀💀💀";
const INPUT_CALL_OF_DOODY = "💩💩💩💩💩";

let hasTriggeredEasterEgg = false;

const mutationObserver = new MutationObserver((mutations) => {
	for(let mutation of mutations) {
		if(mutation.type === "childList") {
			
			// Mode: Input
			if($("#answer").length > 0) {
				console.log("MODE: INPUT");
				setTimeout(() => {
					if($("#answer").text().length > 0) { return; }

					const answerText = hasTriggeredEasterEgg ? INPUT_CALL_OF_DOODY : INPUT_CODE_MONKEY;
					$("#answer").text(answerText);
					console.log(`Entered text: ${answerText}`);
					hasTriggeredEasterEgg = true;
				}, 10);
				setTimeout(() => {
					if($("#button-enter").length === 0) { return; }

					$("#button-enter").trigger("click");
					console.log("Clicked button: Submit");
				}, Math.floor(Math.random() * 100) + 10);
			}
			
			// Mode: Vote
			if($("#HOUSE").length > 0) {
				console.log("MODE: VOTE");
				setTimeout(() => {
					if($("input[name='radio']").prop("checked")) { return; }

					let i = 1;
					let choiceMade = false;

					while(!choiceMade) {
						const $currentChoice = $(`#${i}`);

						if($currentChoice.length > 0 && $currentChoice.attr("disabled") !== "disabled") {
							$currentChoice.trigger("click");
							choiceMade = true;
							console.log(`Clicked option: #${i}`);
						} else if(i > 10) {
							$("#HOUSE").trigger("click");
							choiceMade = true;
							console.log(`Clicked house option, but only because something went wrong lol`);
						}

						i++;
					}
				}, 10);
				setTimeout(() => {
					if($("#button-enter").length === 0) { return; }

					$("#button-enter").trigger("click");
					console.log("Clicked button: Vote");
				}, Math.floor(Math.random() * 100) + 50);
			}
		}
	}
});

mutationObserver.observe(document.getElementById("container"), { childList: true });