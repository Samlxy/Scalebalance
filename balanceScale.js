function scaleBalancing() {
  let balanceScale = document.getElementById('balance-scale').value;
  let availableWeights = document.getElementById('available-weights').value;
  balanceScale = JSON.parse(balanceScale ? balanceScale : '[]');
	availableWeights = JSON.parse(availableWeights ? availableWeights : '[]');

	const diff = balanceScale[1] - balanceScale[0];
	const selectedAndSorted = selectWeights(diff, availableWeights);
	
  document.getElementById('result').innerHTML = selectedAndSorted;
}

function selectWeights(actualDiff, weightsList) {
	const selectedList = [];
	let isDone = false;
			

	for (let i = 0; i < weightsList.length - 1; i += 1) {
		for (let j = i + 1; j < weightsList.length; j += 1) {
			if (Math.abs(weightsList[i] - weightsList[j]) === Math.abs(actualDiff)) {
				selectedList.push(weightsList[i], weightsList[j]);
				isDone = true;
				break;
			}
		}

		if (isDone) break;
	}

	return isDone ? selectedList.sort((a, b) => a - b).join(', ') : 'Scale imbalanced';
}

