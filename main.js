

const canvas = document.getElementById('memeCanvas');
    const Context = canvas.getContext('2d');
    const imageInput = document.getElementById('imageInput');
    const topTextInput = document.getElementById('topText');
    const generateMemeButton = document.getElementById('generateMeme');

    let image = new Image();

    // Load image from file input
    imageInput.addEventListener('change', function(e) {
        const reader = new FileReader();
        reader.onload = function(event) {
            image.src = event.target.result;
            image.onload = () => {
                drawMeme();
            };
        };
        reader.readAsDataURL(e.target.files[0]);
    });

    // Draw meme with text and shadow
    function drawMeme() {
        Context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the image
        Context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Text styling
        Context.font = '40px Impact';
        Context.fillStyle = 'white';
        Context.textAlign = 'right';
        Context.lineWidth = 5;

        // Add shadow
        Context.shadowColor = 'white';
        Context.shadowOffsetX = 23;
        Context.shadowOffsetY = 3;
        Context.shadowBlur = 5;

        // Text
        Context.strokeText(topTextInput.value.toUpperCase(), canvas.width / 2, canvas.height - 20);
        Context.fillText(topTextInput.value.toUpperCase(), canvas.width / 2, canvas.height - 20);

    }

    generateMemeButton.addEventListener('click', drawMeme);

    