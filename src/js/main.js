function openModal(imageSrc, description, date) {
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('caption').innerHTML = description + '<br>' + date;
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}