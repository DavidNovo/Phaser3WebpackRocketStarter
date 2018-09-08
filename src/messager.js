export function showMessage(messageText) {
    const messageE1 = document.createElement('div');
    messageE1.textContent = messageText;
    document.body.appendChild(messageE1);
}