

const navigasi = document.querySelector ('#navbar');
const closemenu = document.querySelector ('.close');
const openmenu = document.querySelector ('.mobile');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    navigasi.style.display = 'flex';
    navigasi.style.top = '0';
    navigasi.style.transition =  "top 1s ease";

}S

function close(){
    navigasi.style.top = '-100vh';
}

