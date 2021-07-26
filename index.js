

var typed = new Typed('#text', {
    strings: ['ADNAN SAMI SANTO', 'SIMPLE DEVOLOPER','STUDENT'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });   
  var typed = new Typed('.type_2', {
    strings: ['ADNAN','SAMI','SANTO','ADNAN SAMI SANTO'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });   

  //nave section 
  let btn=document.querySelector('.menu');
  let menu=document.querySelector('.nav');

  btn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    btn.classList.toggle('active');
  })

  document.addEventListener('contextmenu',function(e){
    e.preventDefault();
  })