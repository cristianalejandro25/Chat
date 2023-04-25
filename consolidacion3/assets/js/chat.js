const chats = document.querySelectorAll('.sidebar li');

chats.forEach(chat => {
  chat.addEventListener('click', () => {
    const chatName = chat.querySelector('h3').innerText;
    const chatAvatar = chat.querySelector('img').getAttribute('src');
    const chatPreview = chat.querySelector('p').innerText;
    const chatHeader = document.querySelector('.chat-header');
    const chatMessages = document.querySelector('.chat-messages');
    
    chatHeader.innerHTML = `
      <img class="mb-2" src="${chatAvatar}" alt="Avatar">
      <h3 style="font-family: 'Inter', sans-serif; font-size:18px; color:#black;">${chatName}</h3>
    `;

    chatMessages.innerHTML = `
      <li class="message received zoom">
        <div class="avatar" >
          <img src="${chatAvatar}" alt="Avatar">
        </div>
        <div class="text">
          <p>${chatPreview}</p>
          <small>10:00 AM</small>
        </div>
      </li>
    </li>
            <li class="message sent zoom">
              <div class="avatar">
                <img src="https://via.placeholder.com/50" alt="Avatar">
              </div>
              <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, hic.</p>
                <small>10:32 AM</small>
              </div>
            </li>

            <li class="message received zoom">
        <div class="avatar" >
          <img src="${chatAvatar}" alt="Avatar">
        </div>
        <div class="text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, hic.</p>
          <small>10:33 AM</small>
        </div>
      </li>
    `;
  });
});