window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    function createGrid(size) {
        container.replaceChildren(); 
        const squareSize = 400 / size; 

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.width = `${squareSize}px`;
            div.style.height = `${squareSize}px`;
            container.appendChild(div);
            div.addEventListener('mouseover', () => {
                div.style.background = '#ff0090';
            });
        }
    }
    
    createGrid(16);

    const btn = document.querySelector('.num-of-squares');
    btn.addEventListener('click', () => {
        let size;
        do {
            size = Number.parseInt(prompt('How many squares per row/column? (max 100)'));
        } while (isNaN(size) || size < 1 || size > 100); 

        createGrid(size);
    });
});
