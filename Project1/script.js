
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorBlur")



document.addEventListener("mousemove",function(dets){
    // console.log(dets)
    
    crsr.style.left = dets.x-10+"px"
    crsr.style.top = dets.y-10+"px"
    
    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"
});

gsap.to("#nav",{
    backgroundColor : "#000",
    duration: 1,
    height:"90px",

    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end: "top -11%",
        scrub : 1
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers : true,
        start:"top -25%",
        end :" top -70%",
        scrub: 3,

    }

})


































// // var a=12;
// // console.log(a);




// // var arr = [1,2,34,22,5,6,7]
// // arr.pop()
// // arr.push(110)
// // arr.shift()
// // arr.unshift(111)
// // // arr.splice(2,1) splice take input parameters as index and how many values we should remove

// // var a = [1,2,3,4,5];
// // var b = [...a]; // reference copy using spread operator [... var_name]
// // b.pop();


// // falsy = 0 false null undefined NaN document.all
// // truthy = everything else

// // if("shubhankar"){
// //     console.log("Hello")
// // }
// // else{
// //     console.log("Heyy")
// // }



// // var a = [1,2,3,4,5,6,7,8,5,2,43,34,6];

// // a.forEach(function(val){
// //     console.log(val); //does not change the original array it modify the temp array witouth disturbing original array
// // })

 