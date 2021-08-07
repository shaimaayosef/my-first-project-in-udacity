# Landing Page Project
## introduction:
This file shows information about the first project required to pass the Scholarship provided by the Ministry of Communications and Technology.
What is required to be prepared in this project is to design a landing page according to the required specifications that can be viewed from [here](https://review.udacity.com/#!/rubrics/2658/view).
## clarification:
* This landing page has been prepared using the following:
  - HTML
  - css
  - javascript
All of them are written in a separate file.

* It is a simple landing page that contains five sections. Each section has a link in the navigation menu above. If you click on it, you will be go directly to the specified and required section.

## Important technical points:
* I built navigation menu using javascript using `document.creatElement` to create a new list and links
* I used `forEach` loop for building the nav menu instead of writing the same code over and over again.
* I got it from [fwd comunity](https://nfpdiscussions.udacity.com/t/project-1/201727/4) .
 

   - i tried this following code but it didn't work :
```
  const mySec = document.querySelectorAll("section");
const unOrderdList = document.getElementById('navbar__list');
const navBox = document.createDocumentFragment();
for(section of mySec){
    const list = document.createElement('li');
    const links = document.createElement('a');
    const title = section.getAttribute("data-nav");
    const id = section.getAttribute("id");
    links.textContent = title;
    links.href = `#${id}`;
    links.classList.add("menu__link");
    links.addEventListener("click", e => {
      e.preventDefault();
      section.scrollIntoView({behavior: "smooth"});
    });
    list.appendChild(links);
    navBox.appendChild(list);
}
```
          this code built the nav-menu but the links did not work properly.

* to make it clear which section is being viewed while scrolling through the page i used `getBoundingClientRect()` method to get the accurate position of sections inside the viewport.  
   In this part I got great help from [fwd comunity](https://nfpdiscussions.udacity.com/t/project-1/201727/4) .

* I prefer using The scroll-behavior CSS property for HTML because it's easier and dynamic also and i got it from [mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior).
but But in compliance with the specific instructions, I have achieved this feature using javascript.
   
## License:
   [GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/)