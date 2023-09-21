document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const container = document.querySelector('.container');
    const button = document.getElementById('toggleButton');

    button.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        container.classList.toggle('dark-mode');
        button.classList.toggle('dark-mode');
    });
});
