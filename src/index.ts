interface DayContent {
  image: string;
  message: string;
  links: { text: string; url: string }[];
}
 const days: DayContent[] = [
  // Populate with data for each day
  { image: "assets/ohchristmastree.jpeg", message: "Christmas is a joyful holiday celebrated worldwide each December, commemorating the birth of Jesus Christ in Christian tradition. It’s a time of togetherness, marked by festive decorations, gift-giving, and gatherings with loved ones. Many enjoy customs like decorating a tree, exchanging presents, and sharing holiday meals, all in the spirit of spreading warmth, generosity, and hope.", links: [{ text: "It's Beginning to Look a Lot Like Christmas", url: "https://open.spotify.com/track/0v2HESaEiiIu9q1cJi3wFn?si=b0adca4c7ce84a11" }] },
  { image: "assets/santahat.jpeg", message: "Santa Claus is a legendary figure known for bringing gifts to children on Christmas Eve. Dressed in a red suit with a white beard, he travels the world in a sleigh pulled by reindeer, delivering presents to homes. According to tradition, Santa rewards well-behaved children with gifts and spreads joy during the holiday season.", links: [{ text: "How Coca-Cola Took Over Santa Claus", url: "https://youtu.be/xEbVqBVC4u8?feature=shared" },
      { text: "Twas the Night Before Christmas Poem", url: "https://www.poetryfoundation.org/poems/43171/a-visit-from-st-nicholas" },
      { text: "Santa Claus is Coming to Town", url: "https://open.spotify.com/track/6syO6UTl8QiiWADJy3Uy2d?si=a87fa2fd6be148ae" }] },
  { image: "assets/ohchristmastree.jpeg", message: "here is the message", links: [{ text: "Oh Christmas Tree", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" },
       { text: "Oh Christmas Tree", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" },] },
  { image: "assets/christmascar.jpeg", message: "here is the message", links: [{ text: "Car Driving", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/escalator.jpeg", message: "here is the message", links: [{ text: "Christmas at the Mall", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/pullingsled.jpeg", message: "here is the message", links: [{ text: "Out in the snow", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/santasleigh.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/mistletoe.jpeg", message: "Mistletoe is a traditional holiday plant with small white berries, commonly used as a decoration during Christmas. According to custom, anyone found standing under the mistletoe is meant to share a kiss, representing love, goodwill, and festive spirit. This playful tradition adds a touch of charm and fun to holiday celebrations, enhancing the joy of the season.",
      links: [{ text: "Why do we kiss under mistletoe?", url: "https://youtu.be/QtJqBiF6EF0?feature=shared" }] },
  { image: "assets/busstop.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/couple.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/candycanes.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/lamppost.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/holly.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/stocking.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/store.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/nutcracker.jpeg", message: "The Nutcracker is a holiday story and ballet, celebrated as a Christmas tradition. It follows the magical journey of a young girl, Clara, who receives a nutcracker doll on Christmas Eve and finds herself in a world of dancing sweets and a fierce battle with the Mouse King. Set to Tchaikovsky’s music, The Nutcracker brings to life characters like the Sugar Plum Fairy and the Nutcracker Prince, creating an experience filled with wonder and fantasy.",
      links: [{ text: "A Brief History of The Nutcracker", url: "https://youtu.be/jcbEMpnr-og?feature=shared" }, {text: "Dance of the Sugar Plum Fairy", url: "https://youtu.be/zV1qLYukTH8?feature=shared"}] },
  { image: "assets/presentsleigh.jpeg", message: "here is the message", links: [{ text: "Sleigh Ride", url: "https://open.spotify.com/track/7fUYUcWy853HS8YJn0b3Sr?si=c322984b259b4225" },
      {text:"A Christmas Story - The Leg Lamp is Delivered", url: "https://youtu.be/F-Vz67p5kLQ?feature=shared"}] },
  { image: "assets/presentsleigh.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/leg-lamp.jpeg", message: "message", links: [{ text: "A Christmas Story - The Leg Lamp", url: "https://youtu.be/F-Vz67p5kLQ?feature=shared" }] },
  { image: "assets/presentsleigh.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/presentsleigh.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/presentsleigh.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/holynight2.jpeg", message: "here is the message", links: [{ text: "Luke 2", url: "https://tinyurl.com/5ctx6u3v" }] },
  { image: "assets/presentsleigh.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/presentsleigh.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
  { image: "assets/presentsleigh.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
];
 function createCalendar() {
  const calendar = document.getElementById("calendar");
  if (!calendar) return;

  //Get current date
  const today = new Date();

   days.forEach((day, index) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("calendar-day");

    const img = document.createElement("img");
    img.src = day.image;
    img.alt = `Day ${index + 1}`;
    dayDiv.appendChild(img);

    const button = document.createElement("button");

    //Set the button text
    button.textContent = `Dec. ${index + 1}`;

    const dayDate = new Date(today.getFullYear(), 10, index + 1); // December (month 11), index + 1
    if (today < dayDate) {
      button.textContent = "Locked";
      button.disabled = true;
    } else {
      button.addEventListener("click", () => openModal(day));
    }

    //Previously just this:
    //button.addEventListener("click", () => openModal(day));

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

// Select envelope image and modal elements
const envelope = document.getElementById("envelope") as HTMLImageElement;
const envelopeModal = document.getElementById("envelope-modal") as HTMLDivElement;
const envelopeClose = document.getElementById("envelope-close") as HTMLSpanElement;

// Show modal when envelope is clicked
envelope.addEventListener("click", () => {
  envelopeModal.style.display = "flex";
});

// Close modal when 'x' button is clicked
envelopeClose.addEventListener("click", () => {
  envelopeModal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === envelopeModal) {
    envelopeModal.style.display = "none";
  }
}); 

// Log the days array to the console for debugging
console.log(days);
  