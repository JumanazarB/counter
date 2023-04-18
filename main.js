const a=document.querySelectorAll(".item strong")
console.log(a);
a.forEach((count)=>{
    const lim= parseInt(count.dataset.name)
    let b=0
    function upDateCount(){
        if (b<=(lim)){
            count.innerText=b
            b++
            if (b<(lim-10)){
                setTimeout(upDateCount,50)
            }
            else if (b>=(lim-10)){
                setTimeout(upDateCount,400)
            }
            
        }
        
    }
    upDateCount()
})