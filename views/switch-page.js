window.onload = () => {
    const tabs = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        const page_tab = tab.dataset.tab;       

        tab.addEventListener('click', () => {
            document.querySelector('.sidebar .tab.is-active').classList.remove('is-active');
            tab.parentNode.classList.add('is-active');            
            SwitchPage(page_tab);
        });
    }
}

function SwitchPage (page_tab) {
    const current_page = document.querySelector('body .page.is-active');
    current_page.classList.remove('is-active');
    const next_page = document.querySelector(`body .page[data-page="${page_tab}"]`);
    next_page.classList.add('is-active');
}