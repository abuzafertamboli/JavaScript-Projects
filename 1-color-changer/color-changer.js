const buttons = document.querySelectorAll('.button');
const background = document.querySelector('body');

buttons.forEach((getButton) => {
    getButton.addEventListener('click', (event) => {
        switch (event.target.id) {
            case "grey":
                background.style.backgroundColor = event.target.id;
                break;
            case "white":
                background.style.backgroundColor = event.target.id;
                break;
            case "blue":
                background.style.backgroundColor = event.target.id;
                break;
            case "yellow":
                background.style.backgroundColor = event.target.id;
                break;
            default:
                console.log("Click on the colored boxes");
                break;
        }
    });
});