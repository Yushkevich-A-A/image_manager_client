export default class DrawWidget {
    constructor() {

        this.drawWidget();
    }

    drawWidget() {
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        this.widget.innerHTML = `<div class="download-field">
        <div class="title">
          <h1 class="main-title">
            Availiable Files (without sms and registration)
          </h1>
        </div>
        <div class="block-list">
          <ul class="list">
            <li class="item">
              <div class="name-file">
                <h2 class="name">Storage Standard.pdf</h2>
              </div>
              <div class="download">
                <span class="downloaded-kb">0</span>
              </div>
              <div class="block-link">
                <a class="link" download href="">download</a>
              </div>
            </li>
            <li class="item">
              <div class="name-file">
                <h2 class="name">Streams Standard.pdf</h2>
              </div>
              <div class="download">
                <span class="downloaded-kb">0</span>
              </div>
              <div class="block-link">
                <a class="link" download href="">download</a>
              </div>
            </li>
            <li class="item">
              <div class="name-file">
                <h2 class="name">XMLHttpRequest Standard.pdf</h2>
              </div>
              <div class="download">
                <span class="downloaded-kb">0</span>
              </div>
              <div class="block-link">
                <a class="link" download href="">download</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="amount-download">
        You\`ve already downloaded: <span class="downloaded">0</span>
      </div>`;

        document.body.appendChild(this.widget);
    }
}