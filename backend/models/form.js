import firebase from 'firebase/app';

class Form{
    constructor(email, name, contact, title, date, description, location){
        this.email=String(email);
        this.name=String(name);
        this.contact=Number(contact);
        this.title=String(title);
        this.date=firebase.firestore.FieldValue.serverTimestamp();
        this.description=String(description);
        this.location=String(location);
    }

    isValid() {
        return typeof this.email === 'string' &&
               typeof this.name === 'string' &&
               typeof this.contact === 'number' &&
               typeof this.title === 'string' &&
               this.date instanceof firebase.firestore.Timestamp &&
               typeof this.description === 'string' &&
               typeof this.location === 'string';
    }
} 

module.exports = Form;