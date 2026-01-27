/*============typing animation========*/
var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer" ," uipath certified developer "," devops developer"],
    typeSpeed:50,
    BackSpeed:25,
    loop:true
})

/*============Aside========*/
const nav = document.querySelector(".nav"),
      navist = nav.querySelectorAll("li"),
      navList = nav.querySelectorAll("li"),
      totalNavlist = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for (let i = 0; i < totalNavlist; i++)
      {
     
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for (let j = 0; j < totalNavlist; j++)
            {
                 if(navList[j].querySelector("a").classList.contains("active"))
                {
                  addBackSection();
                   // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");

            }   
            this.classList.add("active")
            showSectiion(this);
            if(window.innerWind < 1200)
            {
                asideSectionToggleBtn();

            }
        })
      } 
      function removeBackSection()
      {
        for(let i =0; i<totalSection; i++)
        {
          allSection[i].classList.remove("back-section");
        }
      } 
      function addBackSection(num)
      {
       allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for (let i = 0; i < totalSection; i++)
          {
            allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
        for (let i = 0; i < totalNavlist; i++) 
        {
            // The logic was incomplete. It should check if the href attribute of the element
            // matches the target of the nav item.
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
              navList[i].querySelector("a").classList.add("active");
            } else {
              navList[i].querySelector("a").classList.remove("active");
            }
        }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", ()=>
            {
                asideSectionToggleBtn();
            })
            function asideSectionToggleBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for (let i = 0; i < totalSection; i++)
                {
                    allSection[i].classList.toggle("open");
                }
            }
