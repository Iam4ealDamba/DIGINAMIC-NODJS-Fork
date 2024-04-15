class TodoModel {
  #id;
  #title;
  #description;
  #date_debut;
  #date_fin;
  #done;

  constructor(id, title, description, date_debut, date_fin, done) {
    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#date_debut = date_debut;
    this.#date_fin = date_fin;
    this.#done = done;
  }

  getTodo() {
    return {
      id: this.#id,
      title: this.#title,
      done: this.#done,
    };
  }

  getId() {
    return this.#id;
  }

  getTitle() {
    return this.#title;
  }

  getDescription() {
    return this.#description;
  }

  getDateDebut() {
    return this.#date_debut;
  }

  getDateFin() {
    return this.#date_fin;
  }

  getDone() {
    return this.#done;
  }

  setDone(done) {
    this.#done = done;
    return this;
  }

  setDateFin(date_fin) {
    this.#date_fin = date_fin;
    return this;
  }
}

module.exports = TodoModel;
