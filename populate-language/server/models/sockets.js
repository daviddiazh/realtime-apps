const LanguageList = require("./language-list");

class Sockets {

    constructor( io ) {

        this.io = io;
        this.languageList = new LanguageList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('Client connected');

            // Emmit to client connected, all current programming languages
            socket.emit('current-languages', this.languageList.getLanguages());
        
        });
    }


}


module.exports = Sockets;