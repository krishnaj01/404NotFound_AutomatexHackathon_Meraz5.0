const {db} = require('../db');

class form{
    constructor(email, name, contact, title, date, description, location){
        this.email=email;
        this.name=name;
        this.contact=contact;
        this.title=title;
        this.date=firebase.firestore.FieldValue.serverTimestamp();
        this.description=description;
        this.location=location;
    }
} 