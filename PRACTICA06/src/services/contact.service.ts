import { Contact } from "../models/contact.model";

export class ContactService{

    private contacts: Contact []=

    [{"nombre":"David","movil":"611111111","organizacion":"UC3M",correo:"david@UC3M.com"}];

    constructor(){

    }

    addContact(value: Contact){

        this.contacts.push(value);

    }

    getContacts(){

        return this.contacts;
    }

    updateContact(value: Contact){
        

    }

    removeContact(value: Contact){


    }
}