    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');
    menuButton.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    const dialog = document.getElementById('socialDialog');
    document.querySelectorAll('[data-page]').forEach(button => {
      button.addEventListener('click', () => {
        const page = button.dataset.page;
        document.getElementById('dialogTitle').textContent = page + ' — coming soon';
        document.getElementById('dialogText').textContent = 'The ' + page + ' page link is not connected yet. It will be added here when it is ready.';
        dialog.showModal();
      });
    });
    document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
    document.getElementById('dialogOkay').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    document.getElementById('year').textContent = new Date().getFullYear();
