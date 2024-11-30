interface DayContent {
  image: string;
  message: string;
  links: { text: string; url: string }[];
}
 const days: DayContent[] = [
  { image: "assets/catslookingout.jpg", 
    message: `Today is December 1st, so here are three songs welcoming the new month! The first one by Milet I hadn’t heard before, but I do 
    like it. 
    
    The second one I heard for the first time two years ago, and I thought it was a romantic song… after reading the lyrics and 
    paying more attention to the video though, I think it might be a little darker than that haha.`, 
    links: [{ text: "December by Milet", url: "https://open.spotify.com/track/6OTYbrTn8BUb1WViI9HaAS?si=0a5e0c3b2a98422f" },
      { text: "This December by Ricky Montgomerry", url: "https://youtu.be/gzxk4KepBOc?feature=shared" },
      { text: "This December Lyrics", url: "https://open.spotify.com/track/3gjRRs7gmh3Euynu1cau1d?si=d89b381661644200" },
      { text: "It's Beginning to Look a Lot Like Christmas", url: "https://open.spotify.com/track/0v2HESaEiiIu9q1cJi3wFn?si=b0adca4c7ce84a11" }] },

  { image: "assets/santahat.jpeg", 
    message: `The first Christmas concept is Santa Claus (what would Christmas be without
    him after all?). He’s the legendary figure who flies around the entire world on Christmas
    Eve, giving presents to children around the globe. Legend has it that he keeps two lists;
    the “naughty list” and the “nice list.” Those whose names are on the nice list receive gifts
    for Christmas, but those who are on the naughty list only get a lump of coal. There are various
    things you can do to land yourself on the naughty list, including (but not limited to) stealing
    drinks from school restaurants, exercising morning yoga, and not reading books that your 
    girlfriend gifted you for Christmas.`,
    links: [{ text: "How Coca-Cola Took Over Santa Claus", url: "https://youtu.be/xEbVqBVC4u8?feature=shared" },
      { text: "Twas the Night Before Christmas Poem", url: "https://www.poetryfoundation.org/poems/43171/a-visit-from-st-nicholas" },
      { text: "Santa Claus is Coming to Town", url: "https://open.spotify.com/track/6syO6UTl8QiiWADJy3Uy2d?si=a87fa2fd6be148ae" }] },

  { image: "assets/snowman.jpg", message: `Snowmen are a big part of winter, and so of course there are
    a lot of Christmas songs and stories about them. “Frosty the Snowman” is a story about a snowman who 
    comes to life after being given a magician's hat to wear on his head haha. The second link, “The Snowman,” 
    is a famous illustrated story about a snowman that comes to life and spends the night with his creator, a boy. 
    The flight scene (at 15:10) is the most well-known part, and a reference to it will show up later in the calendar. 
    The final link is a Christmas song by Sia that was popular when it came out because there was a trend where couples
    would dance to it haha.`, 
    links: [{ text: "Frosty the Snowman Song", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=5ca6425942d54470" },
    { text: "The Snowman", url: "https://youtu.be/5A3THighARU?feature=shared" },
    { text: "Snowman by Sia", url: "https://open.spotify.com/track/3b95085PI7P3X3oC16Z3Wd?si=08c467f2c8b84f33" },] },

  { image: "assets/rudolph.jpg", 
    message: `Rudolph the red-nosed reindeer is the reindeer whose place is at the front of Santa’s sleigh. 
    The sleigh has nine reindeer total, so the rest are  Dasher, Dancer, Prancer, Vixen, Comet and Cupid, and the 
    final two "Dunder" and "Blixem" (meaning "thunder" and "lightning"). Because Rudolph’s nose is so bright, he 
    flies at the front to guide the sleigh in bad weather.`, 
    links: [{ text: "Rudolph the Red-Nosed Reindeer", url: "https://open.spotify.com/track/47otoIkhx3fkdivEXL5OB6?si=6590b4baaa974089" }] },
  
  { image: "assets/christmastree2.jpg", 
    message: `Christmas trees are a little self-explanatory, so I’ll just include the article on how they 
    became a tradition and two songs about them. I’m excited for the day that we’ll have a home where we 
    can put one up together. You have a gift waiting for you in my locker. ~`, 
    links: [{ text: "How Christmas Trees Became a Holiday Tradition", url: "https://time.com/5736523/history-of-christmas-trees/" },
      { text: "Oh, Christmas Tree", url: "https://open.spotify.com/track/2Tgnu0yfBZdOUshJHND7Mr?si=c74b40adfcc54a8c" },
      { text: "Rockin' Around the Christmas Tree by Brenda Lee", url: "https://open.spotify.com/track/7uwxlZu8ZWRFPNzbsPnNyZ?si=adaa5b2bc13a432b" },] },

  { image: "assets/xmascarol.jpg", 
   message: `A Christmas Carol is a famous book written by Charles Dickens, a famous English
    author from the Victorian era. The story revolves around a character called Ebenezer Scrooge 
    who thinks of nobody but himself and his own money. One Christmas Eve, the ghost of his former 
    co-worker Jacob Marley comes to visit him, warning that if he doesn’t change his greedy ways, he’ll 
    end up damned to hell. Since Scrooge is unconvinced, Marley sends three ghosts (past, present, and future) 
    to make him reflect on his actions and stop being such a selfish bastard. \n In the end, Scrooge wakes up 
    happy to have survived the night and becomes a new man. The “Carol of the Bells” song is a really famous 
    Christmas carol about the arrival of Christmas and the Christmas bells ringing. :)`, 
    links: [{ text: "A Christmas Carol Summary", url: "https://www.sparknotes.com/lit/christmascarol/summary/" },
    { text: "Carol of the Bells", url: "https://open.spotify.com/track/25AtvmC59O7YhigsrxOme6?si=c7e9a689f3ee48c0" },] }, 
  
  { image: "assets/rockefellercenter.jpg",
     message: `Since we’re going to have a busy day today, I only included one song here. ~ 
     The song gets off to a slow start, but once you get past the first part, it gets a little more lively. 
     It’s about an Irish couple who met and fell in love in New York. They grew old together and despite arguments (as in the part of the song where 
     they insult each other haha), they care about each other. A few notes on the lyrics: For the part where they say “Sinatra was swinging,”
    they mean that music by Frank Sinatra (he appears later in the calendar) was playing The “NYPD choir” means the New York City Police Department's 
    choir (actually the NYPD doesn’t have a choir; it only exists in the song haha)`, 
    links: [{ text: "Fairy Tale of New York Lyrics", url: "https://open.spotify.com/track/4soJpnUFA0SPs7XTi6QIVp?si=22a60cf4e3804473" },
      {text: "Fairy Tale of New York Performance", url: "https://youtu.be/eeOVR09ohSU?feature=shared"},
    ] },

  { image: "assets/jackfrost2.jpg", message: `message`,
    links: [{ text: "Why do we kiss under mistletoe?", url: "https://youtu.be/QtJqBiF6EF0?feature=shared" }] },

  { image: "assets/clara.jpg", 
    message: `The Nutcracker is a classical ballet conceived and composed by Pyotr Ilyich Tchaikovsky in 1892. 
    The play is set on Christmas Eve and revolves around a character Clara who goes on a magical adventure and 
    falls in love with a boy who’s been transformed into a nutcracker doll by the evil mouse king. In the magical 
    world that Clara travels to, she encounters all kinds of magic and dances, including the famous dance of the 
    Sugar Plum Fairy. This play is really well-known, and I’ve probably gone to see it at least four times before 
    (it’s especially nice with live music). We should go see it someday!`, 
    links: [{ text: "The Nutcracker Synopsis", url: "https://www.bostonballet.org/stories/the-nutcracker-synopsis/" },
      { text: "Dance of the Sugar Plum Fairy", url: "https://youtu.be/zV1qLYukTH8?feature=shared" },] },  
  
  { image: "assets/blackbgcandycanes.jpg", 
    message: `Candy cane peppermint candies are a really popular Christmas treat, so the first link here is a song
     about them haha, and the second is a video about how they’re made (it’s actually quite satisfying). `, 
    links: [{ text: "Candy Cane Lane by Sia", url: "https://open.spotify.com/track/02tDqMrg969BoG5s6TBnbh?si=88f52a33fdef49f2" },
      { text: "How Candy Canes Are Made", url: "https://youtu.be/QBSrdw19k8M?feature=shared" }
    ] },

  { image: "assets/mistletoe.jpeg", 
    message: `Mistletoe is a plant with white berries that people hang up around Christmas, and the custom is that
     if two people are standing below it, they’re supposed to kiss. ~ Here’s a history explaining the reason why we kiss 
     under mistletoe, as well as two famous Christmas songs that include lyrics about it. The singers of “Merry Christmas”
      (Ed Sheeran & Elton John) are both really famous singers, and I’m sure you’ve heard songs from them before (even if 
      you didn’t realize it was them singing). A quick note for the second song: In the “Christmas in Killarney” song, “beau”
      means “boyfriend.”`, 
    links: [{ text: "Why do we kiss under mistletoe?", url: "https://youtu.be/QtJqBiF6EF0?feature=shared" },
      { text: "Merry Christmas by Ed Sheeran & Elton John", url: "https://youtu.be/Q_yuO8UNGmY?feature=shared" },
      { text: "Christmas in Killarney", url: "https://open.spotify.com/track/4XKj7iRK8QstOH4sG67YJf?si=e9bdfee53e2d4232" },] },
  
  { image: "assets/presentsleigh.jpeg", 
    message: `The Twelve Days of Christmas is a Christmas season that celebrates the Nativity (the birth of Christ). 
    It starts on Christmas Day, December 25th and lasts until January 5th. January 6th is Epiphany (or Three Kings Day), 
    the day when the Three Wise Men come to bring gifts to children in Mexico. The Twelve Days of Christmas is a classic 
    poem that many people sing around the holiday.`, 
    links: [{ text: "The Twelve Days of Christmas Poem", url: "https://www.poetryfoundation.org/poems/42913/the-twelve-days-of-christmas" },
      { text: "Twelve Days of Christmas by Bing Crosby", url: "https://open.spotify.com/track/0cAhE2iDJApegDnVRx6fCK?si=f700035963cd4680" },
      { text: "The Office - 12 Days of Christmas Clip", url: "https://youtu.be/m29KmOSh0Mw?feature=shared" },
      { text: "Best Christmas Ever - SNL", url: "https://youtu.be/4WvwX18oMR4?feature=shared" }] },
  
  { image: "assets/fruitcake.jpeg", 
    message: `The Grinch is a cartoon character from authors Dr. Suess’s “The Grinch” book, published in 1957. 
    In his story, the Grinch is a mean hateful creature who despises Christmas. The village below where he lives 
    is called Whoville, and it has many creatures who love and always celebrate Christmas. Since he hates the Whos, 
    on Christmas Eve he decides to go from house to house to steal all of their gifts in decorations, thinking “haha! 
    Imagine how rotten they will feel in the morning!” To his surprise, when they wake up, they still see Christmas 
    carols and enjoy the holiday, and he realizes that the holiday sentiment is more than just the food and presents, 
    and his heart grows three sizes. Because of this story, people sometimes still refer to a hateful person as a “grinch.”`,
    links: [{ text: "How the Grinch Stole Christmas", url: "https://dai.ly/x3ie7xt" }, 
      {text: "Grinch Wikipedia", url: "https://en.wikipedia.org/wiki/Grinch"}] },

  { image: "assets/krampus.jpg", 
    message: `In the olden days, they used to tell ghost stories on Christmas Eve, so it’s only appropriate
     that there be a little haunted element in the calendar. ~ The first is a song from “The Nightmare Before 
     Christmas” (that movie that I told you about where the Halloween monsters take over Christmas). Jack Skellington 
     accidentally travels from Halloween Land to Christmas Land and discovers the wonder of the holiday. He later 
     decides that the Halloween creatures should take over Christmas, so he kidnaps Santa and tries to take his place haha.
     Also, a little note from the song: “daffy” means “crazy.” The second video is about Krampus, the evil companion of
     St. Nicholas (Santa) who terrorizes children around Christmas. `, 
    links: [{ text: "What's This? (from The Nightmare Before Christmas", url: "https://youtu.be/o36k8upu3Ks?feature=shared" },
      { text: "Krampus", url: "https://youtu.be/VbkGuCozc9M?feature=shared" },] },

  { image: "assets/stocking.jpeg", 
    message: `According to Christmas legend, if you hang your stockings or socks above the fireplace on Christmas Eve,
    when you wake up on Christmas morning, they will be full of treats. The first link here talks about how this legend
    came to be, and the second one is another nice Christmas song. You have yet another gift waiting for you in my locker. ~`, 
    links: [{ text: "The Legend of the Christmas Stocking", url: "https://www.smithsonianmag.com/arts-culture/the-legend-of-the-christmas-stocking-160854441/" },
      { text: "All My Bells are Ringing by Lenka", url: "https://open.spotify.com/track/4WrP4tyHau0Rq1RyHJZxqZ?si=2648fb526d2b4d8f" }] },
  
  { image: "assets/wisemen.jpg", 
    message: `Las Posadas is a Catholic celebration lasting for nine days (From December 16th to December 24th), 
    representing the Virgin Mary’s pregnancy. When I attended these as a kid, there was a half hour of praying the 
    rosary first, which was followed by the singing (most people held candles for this part), then treat bags given 
    by the host, and finally the piñata.`, 
    links: [{ text: "El Pueblo de Las Posadas", url: "https://youtu.be/B3RqafZM9lM?feature=shared" },
      { text: "Las Posadas: A Mexican Christmas Tradition", url: "https://www.franciscanmedia.org/st-anthony-messenger/las-posadas-a-mexican-christmas-tradition/" },
      { text: "Las Posadas Mexicanos", url: "https://youtu.be/hx1_CKrWrjo?feature=shared" },] },

  { image: "assets/peanutsputtinguptree.jpg", 
    message: `“Peanuts” is an American comic strip that ran from 1950 to 2000, with various reruns after. You may
     have heard of it before, but if not, you’ve at least certainly seen some of the characters from it (Snoopy!). 
     There are short films from the cartoon from various holidays, including Valentine’s Day, Halloween, Thanksgiving, 
     and of course, Christmas. :)`, 
    links: [{ text: "Charlie Brown Christmas", url: "https://youtu.be/LCz4FNe_S1U?feature=shared" },
      { text: "Celebrating 70 Years of Peanuts", url: "https://schulzmuseum.org/70-years-of-peanuts-online/" },] },

  { image: "assets/mexicandance.jpg", 
    message: `Christmas in Mexico involves a lot of singing, so here are three Latin Christmas songs. The third singer,
     Juan Gabriel (also known as "Juanga"), is probably one of the most famous Mexican singers from the 70s. I really like 
     this song because it’s about falling in love on December 24th haha. ~`, 
    links: [{ text: "Feliz Navidad by José Feliciano", url: "https://open.spotify.com/track/0oPdaY4dXtc3ZsaG17V972?si=7daa1733f5ae4851" },
      { text: "El Año Viejo by Tony Camargo", url: "https://open.spotify.com/track/6yAXIKVQ7CJnjYoJcZCIzO?si=8c90dfb160ca4284" },
      { text: "24 de Diciembre by Juan Gabriel", url: "https://open.spotify.com/track/2wGxUqy8G9WJto1nnD8IGu?si=2120c15723c0461d" },
      { text: "24 de Diciembre Lyrics Translation", url: "https://lyricstranslate.com/en/24-de-diciembre-24th-december.html" },
      { text: "The Music & Life of Juan Gabriel", url: "https://balletaz.org/your-guide-to-the-music-life-of-juan-gabriel/" },
    ] },

  { image: "assets/homeforchristmas.jpg", 
    message: `For today, here’s one song about celebrating the holidays at home, followed by two clips. 
    The first is a scene from the movie “A Christmas Story” in which the father wins an award for completing 
    crossword puzzles in the newspaper. The second is an SNL clip about visiting your family for the holidays.`, 
    links: [{ text: "(There's No Place Like) Home for the Holidays by Perry Como", url: "https://open.spotify.com/track/0ZamzoOYLzRxE3WuOb5J3r?si=d4b1d83718654d99" },
      { text: "A Christmas Story - The Leg Lamp is Delivered", url: "https://youtu.be/F-Vz67p5kLQ?feature=shared" },
      { text: "Home for the Holidays - SNL", url: "https://youtu.be/VxVXYp2KIeE?feature=shared" },] },

  { image: "assets/greenhouse.jpg", 
    message: `Gingerbread houses and gingerbread men are another fun part of Christmas festivities, and they originated 
    in part from the witch’s candy house in the German fairytale of “Hansel and Gretel.” The second link here is one of 
    the most popular Christmas songs of all time haha. You have another gift waiting for you in my locker. ~`, 
    links: [{ text: "A Brief History of the Gingerbread House", url: "https://www.theguardian.com/travel/2018/dec/22/a-brief-history-of-the-gingerbread-house" },
      { text: "All I Want For Christmas is You by Mariah Carey", url: "https://youtu.be/yXQViqx6GMY?feature=shared" },
      { text: "Last Christmas by Wham!", url: "https://open.spotify.com/track/2FRnf9qhLbvw8fu4IBXx78?si=c46635a1e25d4798" },
    ] },

  { image: "assets/wintericeskating.jpg", 
    message: `Here are three songs about the snowy winter. ~ The first is a cover that I’d never heard before, 
    but I think it sounds nice. The second is from a famous Christmas movie featuring Bing Crosby, and the third 
    is a classic Christmas song about welcoming the falling snow. `, 
    links: [{ text: "Winter Wonderland", url: "https://open.spotify.com/track/7CeP2uqPli3AW6Fn6OF70L?si=781b2573cb0943ce" },
      { text: "White Christmas by Bing Crosby", url: "https://open.spotify.com/track/3XsaSIPWvM61RIFfeb0BBR?si=9b01098775d34c17" },
      { text: "Let it Snow! by Robert Goulet", url: "https://open.spotify.com/track/6dx8Z821RaAqjuoJafsM8X?si=b14690340e0c4afb" }
    ] },

  { image: "assets/couple.jpeg", 
    message: "here is the message", 
    links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },

  { image: "assets/santasleigh.jpeg", message: "here is the message", links: [{ text: "Luke 2", url: "https://tinyurl.com/5ctx6u3v" }] },

  { image: "assets/store.jpeg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },

  { image: "assets/maryandjoseph.jpg", message: "here is the message", links: [{ text: "Merry Christmas to all", url: "https://open.spotify.com/track/35MqcEIVZ7svbBpRt4N30g?si=e85bf43813564a7d" }] },
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
  