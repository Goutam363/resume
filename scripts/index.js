const pre_loader=document.getElementById('preLoader')
const load_lightbox=document.getElementById('lightBox')
function afterLoad(){
    setTimeout(function(){
        pre_loader.style.display="none";
        setTimeout(function(){
            load_lightbox.style.height="auto";
            const mq = window.matchMedia( "(max-width: 700px)" );
            if (mq.matches) {
                load_lightbox.style.width="60%";
                load_lightbox.style.left="20%";
            }
            else {
                load_lightbox.style.width="30%";
                load_lightbox.style.left="35%";   
            }
            load_lightbox.style.backgroundColor="lightgray";
            load_lightbox.style.top="10%";
            setTimeout(function(){
                load_lightbox.style.height="0";
                load_lightbox.style.width="0";
                load_lightbox.style.top="0";
                load_lightbox.style.left="0";
            },7000);
        },1000);
    },2000);
}
const navMenu=document.querySelector('.nav-menu');
const closeMenu=document.querySelector('.close-menu');
const openMenu=document.querySelector('.open-menu');
const sec=document.querySelector('section');
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
function show(){
    navMenu.style.display='flex';
    navMenu.style.top='0';
    sec.style.zIndex='-1';
}
function close(){
    navMenu.style.top='-100%';
    sec.style.zIndex='0';
}
close();
const darkmode=document.querySelector('#darkmode-checkbox');
darkmode.addEventListener('change', function() {
    document.documentElement.classList.toggle('dark-mode');
    document.querySelectorAll('.inverted').forEach((result)=>{
        result.classList.toggle('invert');
    })
});

const form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("sendmsg-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    console.log('Message sent successfully!')
    form.reset()
    }).catch(error => {
    console.log('Some error occured!')
    });
}
form.addEventListener("submit", handleSubmit)