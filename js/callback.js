const right = document.querySelector(".slider__right")
const left = document.querySelector(".slider__left")

const images= document.querySelectorAll(".slider__img")

let length = images.length

let index = 0



right.addEventListener("click",function(){


    index ++

    if(index>length-1){
      index=0
    }

    images.forEach((image,i)=>{
        if(i == index){
            image.classList.remove("hidden")
        }else{
            image.classList.add("hidden")
        }
    })


    // if(index<length-1){
    //     index++
    //     images.forEach((image,i)=>{
    //         if(index === i){
    //             image.classList.remove('hidden')
    //         }else{
    //             image.classList.add('hidden')
    //         }
    //       })
    // }else{
    //     index = 0
    //     images[length-1].classList.add("hidden")
    //     images[index].classList.remove("hidden")

    // }


    console.log(index)
})



left.addEventListener("click",function(){

  index--

  if(index<0){
      index=length-1
  }

  images.forEach((image,i)=>{
      if(i==index){
          image.classList.remove('hidden')
      }else{
          image.classList.add('hidden')
      }
  })


})




















