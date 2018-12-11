class NotesView {

    constructor() {
        this._s = {
            list: document.querySelector('.list'),
            favoriteList: document.querySelector('.favorite-list'),
            removeBtnClass: 'list__element-btn',
            favoriteClass: 'list__element-favorite',
            activeFavoriteClass: 'list__element-favorite_active'
        }

        this._t = {
            item: `
                <li class="list__element" onselectstart="return false">
                    {{text}}
                  
                    <div data-id="{{index}}" class="list__element-favorite {{activeClass}}"></div>

                    <button data-id="{{id}}" class="list__element-btn">Remove</button>
                </li>
            `
        }
    }

    renderNotes(notes) {
        let template = '';
        let activeClass
        for (const n of notes) {
            if(n.favorite===true) {
                activeClass = this._s.activeFavoriteClass;
            } else {
                activeClass = '';
            }
            template += this._t.item
                .replace('{{text}}', n.text)
                .replace('{{index}}', n.id)
                .replace('{{id}}', n.id)
                .replace('{{activeClass}}', activeClass);

    }
    this._s.list.innerHTML = template;

}

    listenRemovingNote(cb) {
        this._s.list.addEventListener('click', (e) => {
            let target = e.target;
            if (target.className === this._s.removeBtnClass) {
                for (const a of target.attributes) {
                    if (a.name === 'data-id') {
                        cb(a.value);
                    }
                }
            }
        })
    }

    listenFavoriteChange(cb) {
        this._s.list.addEventListener('click', (elem) => {
            let target = elem.target;        
            if(target.classList.contains(this._s.favoriteClass)) {
                target.classList.toggle("list__element-favorite_active");                
                for (const a of target.attributes) {
                    if (a.name === 'data-id') {
                        cb(a.value)
                    }
                }
            }
        })
        this._s.favoriteList.addEventListener('click', (elem) => {
            let target = elem.target;        
            if(target.classList.contains(this._s.favoriteClass)) {
                target.classList.toggle("list__element-favorite_active");                
                for (const a of target.attributes) {
                    if (a.name === 'data-id') {
                        cb(a.value)
                    }
                }
            }
        })
    }

    renderFavoriteNotes(notes) {
        let template = '';
        let activeClass = this._s.activeFavoriteClass;
        notes.forEach(notesElem => {
            if (notesElem.favorite === true) {
                template += this._t.item
                .replace('{{text}}', notesElem.text)
                .replace('{{index}}', notesElem.id)
                .replace('{{id}}', notesElem.id)
                .replace('{{activeClass}}', activeClass);
            }
        });
        this._s.favoriteList.innerHTML = template;
    }

    listenRemovingFavoriteNote(cb) {
        this._s.favoriteList.addEventListener('click', (e) => {
            let target = e.target;
            if (target.className === this._s.removeBtnClass) {
                for (const a of target.attributes) {
                    if (a.name === 'data-id') {
                        cb(a.value);
                    }
                }
            }
        })
    }
}