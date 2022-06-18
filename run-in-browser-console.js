let hasTriggeredEasterEgg = false;

const mutationObserver = new MutationObserver((mutations) => {
	for(let mutation of mutations) {
		if(mutation.type === "childList") {
			
			// Mode: Input
			if($("#answer").length > 0) {
				console.info("MODE: INPUT");
				setTimeout(() => {
					if($("#answer").text().length > 0) { return; }

					const answerText = hasTriggeredEasterEgg ? "💩💩💩💩💩" : "💀💀💀💀💀💀";
					$("#answer").text(answerText);
					console.info(`Entered text: ${answerText}`);
					hasTriggeredEasterEgg = true;
				}, 10);
				setTimeout(() => {
					if($("#button-enter").length === 0) { return; }

					$("#button-enter").trigger("click");
					console.info("Clicked button: Submit");
				}, Math.floor(Math.random() * 100) + 10);
			}
			
			// Mode: Vote
			if($("#HOUSE").length > 0) {
				console.info("MODE: VOTE");
				setTimeout(() => {
					if($("input[name='radio']").prop("checked")) { return; }

					let i = 1;
					let choiceMade = false;

					while(!choiceMade) {
						const $currentChoice = $(`#${i}`);

						if($currentChoice.length > 0 && $currentChoice.attr("disabled") !== "disabled") {
							$currentChoice.trigger("click");
							choiceMade = true;
							console.info(`Clicked option: #${i}`);
						} else if(i > 15) {
							$("#HOUSE").trigger("click");
							choiceMade = true;
							console.warn(`Clicked house option, but only because something went wrong lol`);
						}

						i++;
					}
				}, 10);
				setTimeout(() => {
					if($("#button-enter").length === 0) { return; }

					$("#button-enter").trigger("click");
					console.info("Clicked button: Vote");
				}, Math.floor(Math.random() * 100) + 50);
			}
		}
	}
});

mutationObserver.observe(document.getElementById("container"), { childList: true });
