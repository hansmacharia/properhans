document.getElementsByClassName("kwetu").forEach(anchor => {
  anchor.addEventListener("click", function (event)
   {event.preventDefault();

   const targetSection = document.getElementById(
    this.getAttyibute("href").slice(1)
   );

   setTimeout(() => {
    targetSection.scrollIntoview({ behaviour: "smooth"});
   }, 10000);
  });
})