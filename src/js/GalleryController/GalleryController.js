import FieldImages from '../FieldImages/FieldImages';

export default class GalleryController {
  constructor(form, type = 'text') {
    this.input = document.querySelector('.file');
    this.wrapper = document.querySelector('.wrapper-input');
    this.type = type;

    this.init();
  }

  init() {
    this.drawGalleryContainer();
    this.addListeners();
  }

  drawGalleryContainer() {
    this.GalleryContainer = document.createElement('div');
    this.GalleryContainer.classList.add('gallery-container');
    document.body.appendChild(this.GalleryContainer);
  }

  addListeners() {
    this.wrapper.addEventListener('click', (event) => {
      this.input.dispatchEvent(new MouseEvent('click'));
    });

    this.wrapper.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    this.wrapper.addEventListener('drop', (event) => {
      event.preventDefault();
      this.uploadFile({ target: event.dataTransfer });
    });

    this.input.addEventListener('input', (event) => {
      this.uploadFile(event);
    });

    document.addEventListener('click', (event) => {
      if (event.target.closest('.button')) {
        this.checkValidityURL();
      }

      if (event.target.closest('.remove-button')) {
        this.GalleryContainer.removeChild(event.target.closest('.container-img'));
      }
    });
  }

  uploadFile(value) {
    const { target, type } = value;

    const file = target.files && target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const content = event.target.result;
      new FieldImages(content, 'картинка');
      this.input.value = '';
    });

    reader.readAsDataURL(file);
  }
}
