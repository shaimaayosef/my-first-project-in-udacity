
//Define Global Variables
const mySec = document.querySelectorAll("section");
const unOrderdList = document.getElementById('navbar__list');
const navBox = document.createDocumentFragment();

alert(mySec.length);

// build the nav
mySec.forEach(section => {
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
  });
  unOrderdList.appendChild(navBox); //https://nfpdiscussions.udacity.com/t/foreach-loop/204465/14 
    
  
/* Scroll to anchor ID using scrollTO event
 & Scroll to section on link click
 & Set sections as active*/

window.addEventListener("scroll", () => {
    mySec.forEach(mySec => {
        let wherItIs = mySec.getBoundingClientRect();
        if(wherItIs.top >= 0 && wherItIs.top <= 150){
            mySec.classList.add("your-active-class");
         }else {
            mySec.classList.remove("your-active-class");
         }// i get code from fwd comunity (https://nfpdiscussions.udacity.com/t/project-1/201727/4 )
   })
 });

 



