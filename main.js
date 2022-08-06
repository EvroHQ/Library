class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        let sumRating = this._ratings.reduce((accumulator, rating) =>
        accumulator + rating);

        return sumRating / this._ratings.length;
    }
    addRating(sum) {
        this._ratings.push(sum);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

const newBatmanMovie = new Movie("Spielberg", "Batman", "yes")
newBatmanMovie.toggleCheckOutStatus()
newBatmanMovie.addRating(10)
newBatmanMovie.addRating(5)
newBatmanMovie.addRating(1)
console.log(newBatmanMovie)
console.log(`The average of the New Batman Movie is: ` + newBatmanMovie.getAverageRating().toFixed(1));