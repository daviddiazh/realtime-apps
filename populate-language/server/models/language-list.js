const Language = require("./language");

class LanguageList {
    
    constructor(){
        this.languages = [
            new Language('Java'),
            new Language('JavaScript'),
            new Language('SQL')
        ];
    }

    addLanguage ( name ) {
        const newLanguage = new Language( name );
        this.languages.push( newLanguage );

        return this.languages;
    }

    removeLanguage ( id ) {
        this.languages = this.languages.filter( language => language.id !== id );
    }

    getLanguages () {
        return this.languages;
    }

    increaseVotes(id) {
        this.languages = this.languages.map( language => {

            if(language.id === id) {
                language.votes += 1;
            }

            return language;
        })
    }

    changeLanguageName ( id, newName ){
        this.languages.map( language => {
            if(language.id === id){
                language.name = newName;
            }

            return language;
        })
    }

}

module.exports = LanguageList;