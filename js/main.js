let themeCheck= document.getElementById('theme');
themeCheck.addEventListener('click',()=>{

        console.log("Modo Osuro activado");
        document.body.classList.toggle('dark');
        themeCheck.classList.toggle('active');
});






