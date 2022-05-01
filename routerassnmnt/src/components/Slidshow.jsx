 import React from 'react'
 
 const Slidshow = () => {

    var i=0
    let x= setInterval(function(){
       if(i===images_arr.length){
           i=0
 
           }
       
         slideshowImages.src=images_arr[i]
 
         i=i+1
     console.log(i)
 
     },2000)
     
     function stop(){
        clearInterval(x)
    }
   return (
     <div>
         

     </div>
   )
 }
 
 export default Slidshow