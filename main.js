// 1. Creare l'ooggetto rubrica
// 2. Catturare la colonna dove andremo a creare tante card quanti sono i nostri contatti
// 3. Creare un metodo che mi mostri tutti i contatti
// 4. Il metodo funziona ma crea delle duplicazioni. Devo risolvere il problema e far si che non si duplichi.
// 5. Abbiamo risolto ma vogliamo che il bottone mostra rubrica al secndo click nasconda la rubrica.

// Aggiunta contatto
// 1. Creare un metodo per aggiungere contatti. Questo metodo avrà bisogno di un nuovo nome e un nuovo numero
// 2. Agendo sulla lista dei contatti pusheremo il nuovo cntatto

// Rimozione contatto
// 1. Creare un metodo che cancelli un contatto. Sappiamo già che questo metodo utilizzerà lo .splice()
// Rimozione contatto con le icone
// 1. Utilizzare l'indice delle icone per utilizzare lo .splice()


// Questo è il Wrapper dei contatti
let contactsWrapper = document.querySelector(`#contactsWrapper`);

// Bottoni
let showContactsBtm = document.querySelector(`#showContactsBtm`);
let AddContactBtm = document.querySelector(`#AddContactBtm`);
let removeContactBtm = document.querySelector(`#removeContactBtm`);

// Inputs
let nameInput = document.querySelector(`#nameInput`);
let numberInput = document.querySelector(`#numberInput`);

// Icons



// Variabile di appoggio
let check = false; // diamo per assodato che la rubrica non si veda al caricamento della pagina

const rubrica = {

    lista_contatti: [
        {contact_name: 'Yoda', phone_number : 33333333},
        {contact_name: 'Anakin', phone_number : 34444444},
        {contact_name: 'Obi-Wan', phone_number : 35555555},
    ],


    // Devo clonare l'array per lavorarci in quanto questo tipo di arry non è un array di strunghe ma di oggetti

// Metodo per mostrare i contatti
showContacts: function () {
    // Svuotiamo il wrapper per far si che i contatti non si duplichino
    contactsWrapper.innerHTML = ``;

        this.lista_contatti.forEach((contatto)=> {
        let div = document.createElement('div');
        div.classList.add('card-custom');
        div.innerHTML = `
            <p class="lead">${contatto.contact_name}</p>
            <p>${contatto.phone_number}</p>
            <i class="fa-solid fa-trash-can icon"></i>
        `;
        contactsWrapper.appendChild(div);
            
    });
    //Icone
    let icons = document.querySelectorAll('.icon');
    icons.forEach((icona, i)=> {
        icona.addEventListener('click', ()=>{
            this.lista_contatti.splice(i, 1);
            this.showContacts();
        } );
    });
},

//Metodo per Inserire i contatti
addContact : function (newName, newNumber){//if vuole valori truty (stringhe non vuote, true, numeri positivi e gli oggetti - Contesti Boleani) per entrare dentro le graffe
        if(newName && newNumber){
        this.lista_contatti.push( {contact_name: newName, phone_number : newNumber} );
    this.showContacts();
    if(check == false){
        check = true;
         showContactsBtm.innerHTML= 'Nascondi Contatti';
     } 
    } else {
        alert(`Devi inserire sia nome sia numero`);
    }
    
},

//Metodo per rimuovere i contatti
removeContact : function(removedName){
let names = this.lista_contatti.map((contatto)=> contatto.contact_name);
console.log(names);
let index = names.indexOf(removedName);
if(index >= 0 ){
this.lista_contatti.splice(index, 1);
this.showContacts();
if(check == false){
    check = true;
     showContactsBtm.innerHTML= 'Nascondi Contatti';
 } 
}

}

};
// Al clic sul Pulsante Mostra rubrica se la variabile check e false, lancia rubrica.showContacts
showContactsBtm.addEventListener('click', ()=> {
    if(check == false){
        rubrica.showContacts();
        check = true;
        showContactsBtm.innerHTML= 'Nascondi Contatti';
    } else {
        contactsWrapper.innerHTML = ``;
        check = false;
        showContactsBtm.innerHTML= 'Mostra Contatti';
    }
    
});

AddContactBtm.addEventListener(`click`, ()=>{
    rubrica.addContact(nameInput.value, numberInput.value);
    nameInput.value = '';
    numberInput.value = '';
    
});

removeContactBtm.addEventListener(`click`, ()=> {
    rubrica.removeContact(nameInput.value);
    
});
