export class Navigation {
    private navLinks: NodeListOf<HTMLAnchorElement>;
  
    constructor() {
      this.navLinks = document.querySelectorAll(".navigatie li a");
  
      this.navLinks.forEach((item) => {
        item.addEventListener("mouseover", () => {
          const border = item.querySelector("::before") as HTMLAnchorElement;
          border.style.borderBottomColor = "#2D92BF";
        });
  
        item.addEventListener("mouseout", () => {
          const border = item.querySelector("::before") as HTMLAnchorElement;
          border.style.borderBottomColor = "transparent";
        });
      });
    }
  }
  