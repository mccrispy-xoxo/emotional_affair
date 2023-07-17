function handleFileSelect(event,img_id) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const boxDiv = document.getElementById(img_id);
    boxDiv.style.backgroundImage = `url(${event.target.result})`;
  };

  reader.readAsDataURL(file);
}