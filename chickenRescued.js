// Superman's Chicken Rescue

// const chickenAndRoof = [5, 5];
// const chickenPosition = [2, 5, 10, 12, 15];

function chickenRescued(chickenAndRoof, chickenPosition) {
  if (chickenPosition.length > chickenAndRoof[0]) {
    return "Invalid chicken position";
  }

  let allChicken = chickenAndRoof[0];
  let roofLength = chickenAndRoof[1];
  let minRoofPosition = 0;
  let rescuedChicken = 0;

  for (let i = 0; i < allChicken; i++) {
    // check if the current roof  position is the most optimal point that can contain chickens (find from the minimum point first)
    // ex. if current chicken is in 12 is exceed the roof length as it's too far from the initial roof position which is index 0
    // then the minimum roof position need to increase to the next minimum position which is index 1 (roof 3 - 12)

    while (
      Math.abs(chickenPosition[i] - chickenPosition[minRoofPosition]) >=
      roofLength
    ) {
      minRoofPosition++;
    }

    let currentChickens = i - minRoofPosition + 1;
    console.log(
      `i: ${i}, minRoofPosition: ${minRoofPosition}, currentChickens: ${currentChickens}`
    );

    rescuedChicken = Math.max(rescuedChicken, currentChickens);
  }

  return rescuedChicken;
}

// console.log(chickenRescued(chickenAndRoof, chickenPosition));

module.exports = chickenRescued;
