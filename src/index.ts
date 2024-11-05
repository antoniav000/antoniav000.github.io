interface DayContent {
    image: string;
    message: string;
    links: { text: string; url: string }[];
  }
  
  const days: DayContent[] = [
    // Populate with data for each day
    { image: "assets/frosty.jpeg", message: "message", links: [{ text: "Video 1", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
    // ... add up to 25 items
  ];
  
  function createCalendar() {
    const calendar = document.getElementById("calendar");
    if (!calendar) return;
  
    days.forEach((day, index) => {
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("calendar-day");
  
      const img = document.createElement("img");
      img.src = day.image;
      img.alt = `Day ${index + 1}`;
      dayDiv.appendChild(img);
  
      const button = document.createElement("button");
      button.textContent = `Day ${index + 1}`;
      button.addEventListener("click", () => openModal(day));
      dayDiv.appendChild(button);
  
      calendar?.appendChild(dayDiv);
    });
  }
  
  function openModal(day: DayContent) {
    const modal = document.getElementById("modal") as HTMLDivElement;
    const dayTitle = document.getElementById("day-title") as HTMLHeadingElement;
    const dayMessage = document.getElementById("day-message") as HTMLParagraphElement;
    const linksDiv = document.getElementById("links") as HTMLDivElement;
  
    dayTitle.textContent = `Day ${days.indexOf(day) + 1}`;
    dayMessage.textContent = day.message;
    linksDiv.innerHTML = "";
    day.links.forEach(link => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.text;
      anchor.target = "_blank";
      linksDiv.appendChild(anchor);
    });
    modal.style.display = "flex";
  }
  
  createCalendar();

  function closeModal() {
    const modal = document.getElementById("modal") as HTMLDivElement;
    modal.style.display = "none";
  }
  
  document.getElementById("close")?.addEventListener("click", closeModal);
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) closeModal();
  });

  // Log the days array to the console for debugging
  console.log(days);
  