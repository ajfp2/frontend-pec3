/**
 * @class Model
 *
 * Manages the data of the application.
 */

export interface SingleTask {
  id: string;
  text: string;
  complete: boolean;
}


export default class TodoModel implements SingleTask {

    id: string;
    text: string;
    complete: boolean = false;

    constructor(id: string, text: string, complete: boolean) {
      this.id = (id) ? id : this.uuidv4();
      this.text = text;
      this.complete = complete;
    }
  
    uuidv4() {
        return Math.floor(Math.random() * 100000000).toString(16);
        // return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        // (
        //     c ^
        //     (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        // ).toString(16)
        // );
    }
  }
  