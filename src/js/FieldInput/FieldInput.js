export default class FieldInput {
  constructor() {
    this.createForm();
  }

  createForm() {
    this.formContainer = document.createElement('div');
    this.formContainer.classList.add('form-container');

    this.form = document.createElement('form');
    this.form.classList.add('form');
    this.form.innerHTML = `<div class="input-container name-container">
                            <input  type="file" class="input file" id="file"> 
                          </div>
                          <div class="wrapper-input">
                              <span class="inner-text">
                                Drag and Drop files here or
                                click to select
                              </span>
                          </div>`;

    this.formContainer.appendChild(this.form);
    document.body.appendChild(this.formContainer);

    this.inputName = document.querySelector('.file');
  }
}
