
// cursor code is this
var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x - 250 +"px"
    blur.style.top=dets.y  -200 +"px"
})


var h4all =document.querySelectorAll("#nav h4")
console.log(h4all)

h4all.forEach(function(elem){
    elem.addEventListener("mouseenterr",function(){
        crsr.style.scale=2
        crsr.style.border ="1px solid #fff"
    })
})


gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"purple",
    borderRadius:"50%"

})



// gsap code is most important please reda and save it
gsap.to("#nav",{

    backgroundColor:"black",
    duration :0.5,
    height:"90px",
    delay:2,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    

})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top 50vh",
        end:"top -80%",
        scrub:2

    }
})

