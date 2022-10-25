$(function()
{
    let image_container = $('.image-container')
    let next = $('#next')
    let prev = $('#prev')
    let x=0;

    image_container.css('left',x+"%");
            
    image_container.css({
        transition:'0.7s'
      })

    next.on('click',function(){
      x = (x<200)?(x+100):0
       image_container.css('left',-x+"%")
      })

    prev.on('click',function(){
                x=(x>0)?(x-100):200
                image_container.css('left',-x+"%")
    })
})