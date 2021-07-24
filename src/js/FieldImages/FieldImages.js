export default class FieldImages {
  constructor(src, alterText = 'изображение') {
    this.src = src;
    this.img = document.createElement('img');
    this.alterText = alterText;
    this.imgGallery = document.querySelector('.gallery-container');

    this.drawBlockImage();
  }

  drawBlockImage() {
    this.imageDiv = document.createElement('div');
    this.imageDiv.classList.add('container-img');

    this.img.src = this.src;
    this.img.classList.add('img');
    this.img.alt = this.alterText;

    this.removeButton = document.createElement('button');
    this.removeButton.classList.add('remove-button');

    this.imageDiv.appendChild(this.img);
    this.imageDiv.appendChild(this.removeButton);
    this.imgGallery.appendChild(this.imageDiv);
  }
}
