/* 
Activité : gestion des contacts
Author : ESSO Dissirama
Date: 24/08/2019
Cour: Javascipts sur Openclassroom
*/


// Initialisation des variables

let listesContact = [];

let choix = -1;
/*
Class: personne
*/
class personne{
	constructor(nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
	}
	afficher(){
		console.log(`Nom: ${this.nom}  et Prenom: ${this.prenom}`);
	}
	messageAjout(){
		console.log(`Personne de nom: ${this.nom}  et de prenom: ${this.prenom} a été bien ajouté`);
	}
}
/*
Function: ajouter un contact
*/
function ajouterContact(nom, prenom){
	nouveauContact = new personne(nom, prenom);
	listesContact.push(nouveauContact);
	console.log(nouveauContact.messageAjout()) ;
}
/*
Function: Afficher liste des contacts
*/
function listeDesContacts(){
	if (listesContact.length > 0){
		listesContact.forEach(contact => {
			console.log(contact.afficher());
		})
	}else{
		console.log("la liste est vide");
	}
}

//Implementation
console.log('Bienvenue : Carnet de contacts');
/*
Création du Menu
1.Lister les contacts
2.Ajouter un contact
0.Quitter 
*/
while( choix != 0){
	console.log('1: Ajouter un contact');
	console.log('2: Afficher la listes des contacs');
	console.log('0: Quitter');

	choix = Number(prompt("Veullez saisir votre choix"));

	switch (choix) {
		case 0 :
			console.log('\n\n');
            console.log("Au revoir !");
			break;
		case 1 :
			console.log('Ajouter un contact');
			let nouveauNom = prompt('Saisir le nom: ');
			let nouveauPrenom = prompt('Saisir le prenom: ');
			ajouterContact(nouveauNom, nouveauPrenom);
			console.log("\n\n");
			break;
		case 2 :

			console.log('La liste des contacs');
			listeDesContacts();
			console.log("\n\n");
			break;
		default : 
			console.log('Votre choix n\'est pas correcte !');
			console.log("\n\n");
			break;
	}
}