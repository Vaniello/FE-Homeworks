class NotesController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }

    init() {
        this._model.getNotes((data) => {
            this._view.renderNotes(data);
        });
        this.listeners();
    }

    listeners() {
        this._view.listenRemovingNote((id) => {
            this._model.removeNote(id, (notes) => {
                this._view.renderNotes(notes);
                this._view.renderFavoriteNotes(notes)
            })
        });
        this._view.listenRemovingFavoriteNote((id) => {
            this._model.removeNote(id, (notes) => {
                this._view.renderNotes(notes);
                this._view.renderFavoriteNotes(notes)
            })
        });
        this._view.listenFavoriteChange((id) => {
            this._model.changeFavorite(id, (notes) => {
                this._view.renderFavoriteNotes(notes)
                this._view.renderNotes(notes)
            })
        })
    }
}
