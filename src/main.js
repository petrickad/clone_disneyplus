document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    
    window.addEventListener('scroll', function(){
        const currentPosition = window.scrollY;

        if (currentPosition < alturaHero){
            hideHeaderElements() ;
        }
        else{
            showHeaderElements();
        }
    })

    //Seção de atrações, programação das abas
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const abaAlvo = button.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            hideTabs();
            aba.classList.add('shows__list--is--active');

            removeButton();
            button.target.classList.add('shows__tabs__button--is--active');
        })
    }

    //Seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseQuestion);
    }
})

function hideHeaderElements(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hiden');

}

function showHeaderElements(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hiden');

}

function openOrCloseQuestion(elemento) {
    const classe = 'faq__questions__item--is-open';
    console.log();
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}   

function removeButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active')
    }
}

function hideTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is--active');
    } 
}
