const { Piece } = require('swift');

class Middleware extends Piece {

   constructor(store, file, core, options = {}) {
      super(store, file, core, options);

      this.priority = options.priority;
   }

   async run(request, response, route) {
      throw new Error(`The run method has not been implemented by ${this.type}:${this.name}.`);
   }

}

module.exports = Middleware;
