document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("save-btn");

  if (!saveButton) return;

  saveButton.addEventListener("click", async function () {
    const content = document.getElementById("paste-area").value;
    if (!content.trim()) {
      alert("Enter some text!");
      return;
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to save paste!");
      }
    } catch (error) {
      console.error("Error saving paste:", error);
      alert("Something went wrong!");
    }
  });
});
