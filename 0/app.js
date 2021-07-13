var contents = document.querySelectorAll('.content');

contents.forEach(content => {
    content.addEventListener('click',()=>
    {
      RemoveClass();
      content.classList.add('active');
    });
    
});

function RemoveClass()
{
    contents.forEach(content=>{
     content.classList.remove('active');
    })
}