document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("save-btn") as HTMLButtonElement;
  const textareaElem = document.getElementById("paste") as HTMLTextAreaElement;
  saveButton.addEventListener("click", async function () {
    const content = textareaElem.value;
    if (!content) {
      alert("Enter some text!");
      return;
    }

    try {
      const res = await fetch("/paste", {
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
