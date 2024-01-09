const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {

    panel.addEventListener('click', () => {
        remmoveActiveClasses()
        panel.classList.add('active')
    })

})

function remmoveActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}