document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = "black";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    });
  });

 
document.addEventListener('DOMContentLoaded', function () {
    function showOnly(selectedContent) {
        const allContents = document.querySelectorAll('.bookcontents, .managecontents, .checkincontents, .fltcontents');
        allContents.forEach(content => {
            if (content === selectedContent) {
                content.style.display = 'block';
                content.style.opacity = 1;
            } else {
                content.style.display = 'none';
                content.style.opacity = 0;
            }
        });
    }

    document.querySelector('.bookbtn').addEventListener('click', function () {
        const bookContents = document.querySelector('.bookcontents');
        showOnly(bookContents);
    });

    document.querySelector('.managebtn').addEventListener('click', function () {
        const manageContents = document.querySelector('.managecontents');
        showOnly(manageContents);
    });

    document.querySelector('.checkbtn').addEventListener('click', function () {
        const checkinContents = document.querySelector('.checkincontents');
        showOnly(checkinContents);
    });

    document.querySelector('.fltbtn').addEventListener('click', function () {
        const fltContents = document.querySelector('.fltcontents');
        showOnly(fltContents);
    });
});
function showOnly(selectedContent) {
    const allContents = document.querySelectorAll('.bookcontents, .managecontents, .checkincontents, .fltcontents');
    allContents.forEach(content => {
        if (content === selectedContent) {
            content.style.display = 'block';
            setTimeout(() => {
                content.style.opacity = 1;
            }, 10);
        } else {
            content.style.opacity = 0;
            setTimeout(() => {
                content.style.display = 'none';
            }, 500); 
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    var subscribeSection = document.querySelector(".subscribe");

    window.addEventListener("scroll", function () {
      var scrollPosition = window.scrollY;
      var subscribeSectionOffset = subscribeSection.offsetTop;

      if (scrollPosition >= subscribeSectionOffset) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    });
  });



  $(document).ready(function(){
    $(".net").click(function(){
        $(".network").toggle();
    })
  })
  $(document).ready(function(){
    $(".manage1btn").click(function(){
        $(".manage1").toggle();
    })
  })
  $(document).ready(function(){
    $(".usbtn").click(function(){
        $(".us").toggle();
    })
  })
  $(document).ready(function(){
    $(".planbtn").click(function(){
        $(".plantrip").toggle();
    })
  })
  $(document).ready(function(){
    $(".loyaltybtn").click(function(){
        $(".loyalty").toggle();
    })
  })
  $(document).ready(function(){
    $(".helpbtn").click(function(){
        $(".help").toggle();
    })
  })
  $(document).ready(function(){
    $(".book2btn").click(function(){
        $(".book2").toggle();
    })
  })
  $(document).ready(function(){
    $(".expbtn").click(function(){
        $(".saudiaexp").toggle();
    })
  })