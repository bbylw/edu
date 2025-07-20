document.getElementById('question-btn').addEventListener('click', async () => {
    const question = document.getElementById('question-input').value;
    if (!question) {
        alert('Please enter a question');
        return;
    }

    const chatContainer = document.querySelector('.chat-container');

    const userQuestionDiv = document.createElement('div');
    userQuestionDiv.classList.add('chat-message', 'user-message');
    userQuestionDiv.textContent = question;
    chatContainer.appendChild(userQuestionDiv);

    document.getElementById('question-input').value = '';

    try {
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const botResponseDiv = document.createElement('div');
        botResponseDiv.classList.add('chat-message', 'bot-message');
        botResponseDiv.textContent = data.response;
        chatContainer.appendChild(botResponseDiv);

        chatContainer.scrollTop = chatContainer.scrollHeight;
    } catch (error) {
        console.error('Error:', error);
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('chat-message', 'bot-message', 'error-message');
        errorDiv.textContent = 'Sorry, something went wrong. Please try again later.';
        chatContainer.appendChild(errorDiv);
    }
});
