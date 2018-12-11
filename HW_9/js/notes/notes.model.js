class NotesModel {
    constructor() {
        this._notes = [{
                id: 1,
                text: 'Some text 1',
                favorite: false
            },
            {
                id: 2,
                text: 'Some text 2',
                favorite: false
            },
            {
                id: 3,
                text: 'Some text 3',
                favorite: false
            },
            {
                id: 4,
                text: 'Some text 4',
                favorite: false
            }
        ]
    }

    getNotes(cb) {
        // getting notes...
        cb(this._notes);
        return this._notes;
    }

    removeNote(id, cb) {
        this._notes = this._notes.filter((e) => e.id !== +id);
        cb(this._notes)
    }

    changeFavorite(id, cb) {
        let favorite = this._notes.find((e)=> e.id === +id).favorite;
        (favorite===false) ? favorite=true : favorite=false;
        this._notes.find((e)=> e.id === +id).favorite = favorite;
        cb(this._notes)
    }
}