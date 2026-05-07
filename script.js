const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if(navToggle){
  navToggle.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
  });
}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

  anchor.addEventListener('click',function(e){

    e.preventDefault();

    const target=document.querySelector(this.getAttribute('href'));

    if(target){
      target.scrollIntoView({
        behavior:'smooth'
      });
    }

  });

});

// Scroll Reveal

const hiddenElements=document.querySelectorAll('.card,.project,.skill-box,.timeline-item');

const observer=new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

},{
  threshold:0.2
});

hiddenElements.forEach(el=>{
  el.classList.add('hidden');
  observer.observe(el);
});

// Dynamic Typing Effect

const textArray=[
  'Full Stack Developer',
  'AI & ML Engineer',
  'React Developer',
  'Python Programmer'
];

const tag=document.querySelector('.tag');

let textIndex=0;
let charIndex=0;
let isDeleting=false;

function type(){

  const current=textArray[textIndex];

  if(isDeleting){
    tag.textContent=current.substring(0,charIndex--);
  }else{
    tag.textContent=current.substring(0,charIndex++);
  }

}