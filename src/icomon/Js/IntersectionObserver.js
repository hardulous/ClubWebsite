
// intersection observer is a js API to observer dom element in viewport based on which we can trigger style on element

// intersection observer accept a function as an argument which take parameter entries which is a dom element and 2nd is option which tell us when to trigger this callback function and viewport respect and default it is null

const observer = new IntersectionObserver( (entries)=>{

    console.log(entries); // here each enties contain many method which we can use to perform styling

    entries.forEach(entry=>{
     
        entry.target.classList.toggle("show",entry.isIntersecting)  // here add class show only if isIntersecting is true

        // here once the element is visible on the screen then we will stop observing the element
        if(entry.isIntersecting){   
            observer.unobserve(entry.target);
        }
        
    })

} , {
    threshold:1,  // now element must be 100% visible to trigger callaback
} )

// now select element on which we are adding this observer
const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

    observer.observe(card);  // here adding observer in each class

})


// here each entries contain property ::

/*

1. intersectionRatio = it tell us what percentage of element is on screen btw 0 and 1

2. isIntersecting = boolean which tell wheter the element is visible on the screen

3. target = it contain the actual dom element on which observer is applied


detailed explanation in https://blog.webdevsimplified.com/2022-01/intersection-observer/

*/

