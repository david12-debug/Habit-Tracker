const button = document.getElementById("add-button");

button.addEventListener("click", () => {
  const input = document.getElementById("habit-input");
  const newHabit = input.value.trim();

  if (newHabit) {
    const li = document.createElement("li");
    li.textContent = newHabit;
    document.getElementById("habit-list").appendChild(li);
    input.value = "";

    // create checkbox img
    const checkboxImg = document.createElement("img");
    checkboxImg.src = "images/unchecked.png";
    checkboxImg.width = 20;
    checkboxImg.height = 20;

    checkboxImg.addEventListener("click", () => {
      if (checkboxImg.src.includes("unchecked")) {
        checkboxImg.src = "images/checked.png";

        // move to bottom
        document.getElementById("habit-list").appendChild(li);

      } else {
        checkboxImg.src = "images/unchecked.png";

        // move to top
        document.getElementById("habit-list").insertBefore(li, document.getElementById("habit-list").firstChild);
      }
    });

    li.appendChild(checkboxImg);
  }
});
