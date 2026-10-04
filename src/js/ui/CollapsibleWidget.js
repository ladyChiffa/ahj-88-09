export default class CollapsibleWidget {
    constructor(container) {
        this.container = container;

        this._widget = document.createElement('div');
        this._widget.classList.add('container');

        this._button = document.createElement('button');
        this._button.classList.add('button');
        this._button.innerText = 'Свернуть';
        this._button.addEventListener('click', () => {
            this._textArea.classList.toggle('collapsed');
        });

        this._textArea = document.createElement('div');
        this._textArea.classList.add('collapsible');
        
        this._widget.appendChild(this._button);
        this._widget.appendChild(this._textArea);

        this.container.appendChild(this._widget);
    }

    open(text) {
        this._textArea.innerText = text;
    }
}