const tagsEl=document.getElementById("tags");
const textarea=document.getElementById("textarea");

textarea.addEventListener("keyup",(e)=>{
    createTag(e.target.value);
})
function createTag(input){
     const tags=input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim()) ;
     
     tagsEl.innerHTML="";

     tags.forEach(tag =>{
         const tagEl=document.createElement('span');
         tagEl.classList.add('tag');
         tagEl.innerText=tag;
         tagsEl.appendChild(tagEl);
     })

}