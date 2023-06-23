let elemento = document.getElementById('matrix')
let ctx = elemento.getContext('2d')
let width = document.body.clientWidth
let height = document.body.clientHeight

elemento.width = width
elemento.height = height

let position = Array(300).join(0).split('')

function inicio_matrix(){
    ctx.fillStyle = 'rgba(0, 30, 1, 0.05)'
    ctx.fillRect(0, 0, width, height)
    ctx.fillStyle = '#37cc05'
    
    ctx.font = '13pt Arial'
    
    position.map(function(y, index){
        let text = String.fromCharCode(1e2 + Math.random() *30)
        let x = (index *15) + 15
        
        matrix.getContext('2d').fillText(text, x, y)
        
        if(y > 150 + Math.random() *1e5){
            position[index] = 0
        }else{
            position[index] = y + 15
        }
    })
}
setInterval(inicio_matrix,50)
