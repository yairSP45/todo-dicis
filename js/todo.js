const formulario = document.getElementById('formulario')
const listaTareas = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

// Variable global paralas tareas como objeto
let tareas = {}

//Agregamos eventos
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tareas')){
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    pintarTareas()
})

const pintarTareas = () => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
    if(Object.values(tareas).length === 0){
        listaTareas.innerHTML = `
            <div class="alert-dark">
            No tak peding
            </div>
        `
        return
    }
    listaTareas.innerHTML = ''

    Object.values(tareas).forEach((tarea) => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.texto
        if(tarea.estado) {
            clone.querySelectorAll('.fas')[0].classList.replace('fa-circle-check', 'fa-circle-minus')
            clone.querySelector('.alert').classList.replace('alert-warning', 'alert-primary')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }
        clone.querySelectorAll('.fast')[0].dataset.id = tarea.id
        clone.querySelectorAll('.fast')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}


