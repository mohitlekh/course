const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    
    panel.addEventListener('click', () => {
        removeactiveclassess()
       panel.classList.add('active')
    });
})

function removeactiveclassess() {
    panels.forEach(panel =>{
        panel.classList.remove('active')
        console.log(123)
    });
}