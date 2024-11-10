const firebase = require('firebase/app');

class Form{
    static Types = { // Defining the enum as a static property for type property of the form
        LOST: 'lost',
        FOUND: 'found'
    };

    constructor(email, name, type, contact, title, date, description, location){
        this.email=String(email);
        this.name=String(name);
        this.contact=Number(contact);
        this.type=type;
        this.title=String(title);
        // this.date=firebase.firestore.FieldValue.serverTimestamp();
        this.description=String(description);
        this.location=String(location);
    }

    isValid() {
        return typeof this.email === 'string' &&
               typeof this.name === 'string' &&
               Object.values(Form.Types).includes(this.type) &&
               typeof this.contact === 'number' &&
               typeof this.title === 'string' &&
            //    this.date instanceof firebase.firestore.Timestamp &&
               typeof this.description === 'string' &&
               typeof this.location === 'string';
    }
} 

module.exports = Form;