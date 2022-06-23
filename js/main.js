
let theCanvas = document.getElementById('our-canvas'),
  
    theContext = theCanvas.getContext('2d'),
    Painting = false,
    lineWidth = 3;
    theCanvas.width = window.innerWidth; 
    theCanvas.height = window.innerHeight;
 
    theCanvas.addEventListener('mousedown', (e) => {
        Painting = true;
        theContext.moveTo(e.clientX, e.clientY);
       
    });
    
    theCanvas.addEventListener('mouseup', () => {
        Painting = false;
       
    });
    theCanvas.addEventListener('mouseleave', () => {
        Painting = false;
       
    });

    
    theCanvas.addEventListener('mousemove', (e) => {
        if(!Painting) {
            return;
        }
        theContext.lineWidth = lineWidth;
        theContext.lineCap = 'round';
        theContext.lineTo(e.clientX  , e.clientY);
        theContext.strokeStyle = "#FF0000";
        theContext.stroke();
    });
