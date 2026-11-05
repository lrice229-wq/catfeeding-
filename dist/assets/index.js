    const dialog = document.getElementById('placeholderDialog');
    const dialogText = document.getElementById('dialogText');
    const messages = {
      'Donate': 'The online giving link has not been connected yet. Please don’t send money until verified payment details and fund-use information are posted.',
      'Food donations': 'The food-donation process is still being arranged. A confirmed drop-off location and accepted-supplies list will be added before collection begins.',
      'Financial donations': 'No payment service is connected. Please don’t send money until a verified payment link and clear fund-use plan are posted.',
      'Food support request': 'The pantry is not accepting food-support requests yet. A request form or contact information will be added once the program is ready.',
      'Volunteering': 'The volunteer sign-up is not open yet. A contact method and first volunteer opportunities will be added once the project is organized.',
      'Contact': 'The contact link is a placeholder. Add a verified project email or social page before inviting visitors to reach out.',
      'Contact email': 'Replace this with a verified email address before launch.',
      'Social media': 'Replace this with the project’s verified social media page before launch.',
      'Amazon wish list': 'Our Amazon wish list has not been created yet. We’ll add the link here as soon as it is ready.',
      'Facebook': 'The Facebook page link is not connected yet. It will be added here when it is ready.',
      'Google': 'The Google page link is not connected yet. It will be added here when it is ready.'
    };
    document.querySelectorAll('[data-placeholder]').forEach(button => {
      button.addEventListener('click', () => {
        const label = button.dataset.placeholder;
        document.getElementById('dialogTitle').textContent = label + ' — coming soon';
        dialogText.textContent = messages[label] || messages.Contact;
        dialog.showModal();
      });
    });
    const closeDialog = () => dialog.close();
    document.getElementById('dialogClose').addEventListener('click', closeDialog);
    document.getElementById('dialogOkay').addEventListener('click', closeDialog);
    dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');
    menuButton.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
    document.getElementById('year').textContent = new Date().getFullYear();
