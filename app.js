const boton = document.querySelector('#boton')
const config = window.matchMedia("(prefers-color-scheme: dark)")
const bodyCondition = document.querySelector('body')



const localConfig = localStorage.getItem('tema')
if(localConfig === 'dark'){
    document.body.classList.toggle("dark-theme")
}else if(localConfig === 'light'){
    document.body.classList.toggle("light-theme")
}

document.addEventListener("DOMContentLoaded", () => {
    makeIcon()
  });

  function makeIcon(){
    if (bodyCondition.classList.contains('dark-theme')) {
        boton.classList.add('dark')
    }else{
        boton.classList.add('light')
    }
  }

boton.addEventListener('click', () => {
    let colorTema;

    if(config.matches){
        document.body.classList.toggle("light-theme")
        colorTema = document.body.classList.contains('light-theme') ? "light" : 'dark'
        
    }else{
        document.body.classList.toggle("dark-theme") ? "dark" : 'light'    
    }
    
    if(colorTema === 'dark'){
        boton.classList.add('light')
    }else{
        boton.classList.remove('light')
        boton.classList.add('dark')
    }
    localStorage.setItem('tema', colorTema) 
    
})