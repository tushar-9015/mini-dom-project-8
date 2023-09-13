const btn=document.querySelector("#throttle");
     
    // Throttling Function
    const throttleFunction=(func, delay)=>{
     
      // Previously called time of the function
      let prev = 0;
      return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();
         
        // If difference is greater than delay call
        // the function again.
        if(now - prev> delay){
          prev = now;
     
          // "..." is the spread operator here
          // returning the function with the
          // array of arguments
          return func(...args); 
        }
      }
    }
    document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
      const div = document.createElement("div")
      div.classList.add('imgDiv');

      div.style.left = dets.clientX + "px";
      div.style.top = dets.clientY + "px";

      const img = document.createElement("img");
      img.setAttribute("src", "https://images.pexels.com/photos/17982042/pexels-photo-17982042/free-photo-of-tropical-bird-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
      div.appendChild(img)

      gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .6
      })

      gsap.to(img, {
        y: "100%",
        delay: .8,
        ease: Power1,
        duration: .4
      })



      document.body.appendChild(div)

      setTimeout(function(){
        div.remove();
      },2000)
    }, 400));