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

            console.log('Client Connected');

            // Emmit to client connected, all current programming languages
            socket.emit('current-languages', this.languageList.getLanguages());
        
            socket.on('vote-language', (id) => {
                this.languageList.increaseVotes(id);

                this.io.emit('current-languages', this.languageList.getLanguages()); // Return to client side languages updated
            });

            socket.on('remove-language', (id) => {
                this.languageList.removeLanguage(id);

                this.io.emit('current-languages', this.languageList.getLanguages());
            })

            socket.on('update-name', ({id, name}) => {
                this.languageList.changeLanguageName(id, name);

                this.io.emit('current-languages', this.languageList.getLanguages());
            })
        });
    }


}


module.exports = Sockets;