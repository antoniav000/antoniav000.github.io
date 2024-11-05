interface DayContent {
    image: string;
    message: string;
    links: { text: string; url: string }[];
  }
  
  const days: DayContent[] = [
    // Populate with data for each day
    { image: "assets/frosty.jpeg", message: "here is the message", links: [{ text: "Frosty the Snowman", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
    { image: "assets/ohchristmastree.jpeg", message: "here is the message", links: [{ text: "Oh Christmas Tree", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" },
         { text: "Oh Christmas Tree", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
    { image: "assets/christmascar.jpeg", message: "here is the message", links: [{ text: "Car Driving", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
    { image: "assets/escalator.jpeg", message: "here is the message", links: [{ text: "Christmas at the Mall", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
    { image: "assets/pullingsled.jpeg", message: "here is the message", links: [{ text: "Out in the snow", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
    { image: "assets/santasleigh.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
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
      button.textContent = `Dec. ${index + 1}`;
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
      linksDiv.appendChild(document.createElement("br"));
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
  