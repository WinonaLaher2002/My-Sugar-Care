function checkSugar() {
  const sugar = document.getElementById("sugar").value;
  const type = document.getElementById("type").value;
  const result = document.getElementById("result");

  if (!sugar) {
    result.textContent = "Please enter your sugar level.";
    result.style.color = "red";
    return;
  }

  let message = "";
  let color = "";

  if (type === "fasting") {
    if (sugar >= 80 && sugar <= 130) {
      message = "✅ Safe fasting range. You're doing okay 💙";
      color = "green";
    } else {
      message = "⚠️ Slightly off range. Breathe, adjust gently.";
      color = "orange";
    }
  } else {
    if (sugar < 180) {
      message = "✅ Normal after-meal level. No need to panic 🌱";
      color = "green";
    } else {
      message = "⚠️ High after-meal. Walk, hydrate, rest.";
      color = "orange";
    }
  }

  result.textContent = message;
  result.style.color = color;
}