const button = document.getElementById("add-button");

button.addEventListener("click", () => {
  const input = document.getElementById("habit-input");
  const newHabit = input.value.trim();

  if (newHabit) {
    const li = document.createElement("li");
    li.textContent = newHabit;
    document.getElementById("habit-list").appendChild(li);
    input.value = "";
  }
});
