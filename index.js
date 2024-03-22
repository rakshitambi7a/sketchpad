const pixels = document.querySelector('#pixels');
const inpbtn = document.querySelector('#enter');
inpbtn.addEventListener('click', (e) =>{
    e.preventDefault();
});

function draw(){
    drawGrid(pixels.value)
    
}

function drawGrid(pixels){
    const boxWidth = 750/pixels;
    const boxHeight = 750/pixels;
    document.querySelector('.sketchpad').style.cssText = "display :flex; flex-direction:column;";
    for(let i=0;i<pixels;i++){
        createRow(boxHeight,boxWidth);

    }
    drawBoxes(boxHeight,boxWidth,pixels);
    document.querySelector('#sidebar').removeChild(inpbtn);
}

function createRow(boxHeight,boxWidth){
    const row = document.createElement('div');
    row.className = 'row';
    row.style.height='fit-content';
    row.style.width='fit-content';
    document.querySelector('.sketchpad').appendChild(row);
    row.style.cssText = "display: flex ; justify-content: center;"

}

let toDraw = false;

function addEvent(box) {
    box.addEventListener('mouseover', (e)=>{
        e.preventDefault();
        if(toDraw) {
            box.style.backgroundColor = 'black';
        }
    });
    box.addEventListener('mousedown', (e) => {
        e.preventDefault();
        toDraw = true;

    });
    box.addEventListener('mouseup', (e) =>{
        e.preventDefault();
        toDraw = false;
    });
}

function drawBoxes(boxHeight,boxWidth,pixels){
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        for(let i=0;i<pixels;i++){
            const box = document.createElement('div');
            box.className = 'box';
            addEvent(box);
            row.appendChild(box);
            box.style.height = `${boxHeight}px`;
            box.style.width = `${boxWidth}px`;
        }
    });
}



function clear(){

    const rows = document.querySelectorAll('.row');
    rows.forEach((row) =>{
        document.querySelector('.sketchpad').removeChild(row);
    })
    pixels.value = '';
}

const clrbtn = document.querySelector('#clear');
clrbtn.addEventListener('click', (f) =>{
    f.preventDefault();
    clear();
    document.querySelector('#sidebar').appendChild(inpbtn).insertBefore(clrbtn);
});
