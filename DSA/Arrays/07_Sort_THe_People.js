let heights = [1, 2, 6, 3, 5, 4];
function SortthePeople(names, heights) {
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length - i - 1; j++) {
      if (heights[j] < heights[j + 1]) {
        // Swap heights[j] and heights[j + 1]

        let temp = heights[j];
        heights[j] = heights[j + 1];
        heights[j + 1] = temp;

        let tempName = names[j];
        names[j] = names[j + 1];
        names[j + 1] = tempName;
      }
    }
  }

  return names;
}

// console.log(heights); // Output: [1, 2, 3, 4, 5, 6]
// console.log(SortthePeople([180, 165, 170], ["Mary", "John", "Emma"]));
// console.log(SortthePeople([155, 185, 150], ["Alice", "Bob", "Bob"]));
console.log(
  SortthePeople(
    [
      "IEO",
      "Sgizfdfrims",
      "QTASHKQ",
      "Vk",
      "RPJOFYZUBFSIYp",
      "EPCFFt",
      "VOYGWWNCf",
      "WSpmqvb",
    ],
    [17233, 32521, 14087, 42738, 46669, 65662, 43204, 8224]
  )
);
