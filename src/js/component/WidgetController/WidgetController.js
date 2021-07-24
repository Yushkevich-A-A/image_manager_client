import file1 from './../content/StorageStandard.pdf';
import file2 from './../content/StreamsStandard.pdf';
import file3 from './../content/XMLHttpRequestStandard.pdf';


export default class WidgetController {
    constructor(widget) {
        this.widget = widget;
        this.downloaded = document.querySelector('.downloaded');
        this.arrayFilesDownloaded = document.querySelectorAll('.downloaded-kb');
        this.arrayLinks = document.querySelectorAll('.link');
        this.arrFiles = [file1, file2, file3];
        this.init();
    }

    init() {
        this.addListeners();
        for (let i = 0; i < this.arrayLinks.length; i++) {
            this.arrayLinks[i].href = this.arrFiles[1];
        }
    }

    addListeners() {
        document.addEventListener('click',  event => {
            // console.log(event)
            event.preventDefault();
            if(event.target.closest('.link')) {
                const link = event.target.closest('.link');
                const blob = fetch(link.href).then(result => new File(result));
                console.log(blob);
            }
        })
    }
}