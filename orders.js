
document.getElementById('myFile').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('aadhaarImg').src = e.target.result;
            document.getElementById('aadhaarImg').width = 100; // Set new width
            document.getElementById('aadhaarImg').height = 100; // Set new height
        };
        reader.readAsDataURL(file);
    }
});