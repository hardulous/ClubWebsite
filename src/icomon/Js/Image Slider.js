
const buttons = document.querySelectorAll("[data-carousel-button]") // grabbing all the element which have attribute name data-carousel-button

buttons.forEach((button)=>{

    button.addEventListener('click',(e)=>{
        
        console.log(button.dataset)  // it will return the all the dataset attribute present in button
       
        // here based on button we click on we will either go in +1 ot -1 direction in img
        const offset = button.dataset.carouselButton ==="next"? 1 : -1;
        
        // here from the button closest() will find the nearest element which have data attribute as data-carousel and then from that element it will find the element having data set as data-slides
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        
        // here finding new index of the slide where we will add these data-active attribute
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        
        if(newIndex < 0){
            newIndex = slides.children.length-1;
        }
        else if(newIndex>=slides.children.length){
            newIndex = 0;
        }
        
        // now based on index of slide to be shown we will add data-active attribute to it and remove the data-active attribute from the previous active slide
        slides.children[newIndex].dataset.active = true

        delete activeSlide.dataset.active

    })

})