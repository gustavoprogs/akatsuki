function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e)=> {
            if(e.target.id == modalID || e.target.id == 'sair'){
                modal.classList.remove('mostrar');
            }
        });
    }    
}

const button = document.querySelector('.ft-button-pain');
button.addEventListener('click', () => iniciaModal('modal-membros'));

