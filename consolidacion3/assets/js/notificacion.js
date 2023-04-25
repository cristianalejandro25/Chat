const chatLinks = document.querySelectorAll('.chat-link');
chatLinks.forEach(chatLink => {
  chatLink.addEventListener('click', () => {
    chatLink.classList.remove('unread');
    chatLink.querySelector('.unread-count').textContent = '0';
  });
});
