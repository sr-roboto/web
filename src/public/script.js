document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('textInput');
  const colorButton = document.getElementById('colorButton');
  const messageModal = document.getElementById('messageModal');
  const modalMessage = document.getElementById('modalMessage');
  const closeModal = document.getElementById('closeModal');

  let colorIndex = 0;
  const colorStyles = [
    { background: 'white', color: 'black' },
    { background: 'black', color: 'white' },
    { background: 'lightblue', color: 'red' },
  ];

  textInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      modalMessage.textContent = textInput.value;
      messageModal.showModal();
    }
  });

  closeModal.addEventListener('click', () => {
    messageModal.close();
  });

  colorButton.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colorStyles.length;
    messageModal.style.backgroundColor = colorStyles[colorIndex].background;
    messageModal.style.color = colorStyles[colorIndex].color;
  });
});
