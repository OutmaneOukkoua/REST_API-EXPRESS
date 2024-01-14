let personnes = [
  { CIN: "SB124578", Nom: "outmane",Prenom: "oukkoua",Sexe: "Homme"},
  { CIN: "SB322159", Nom: "Attahiri", Prenom: "Manal",Sexe: "Femme"},
  { CIN: "SB326589", Nom: "Aaboub", Prenom: "Mohammmed Amine", Sexe: "Homme"},
  { CIN: "SB568784",Nom: "El Malki",Prenom: "Hajar", Sexe: "Femme" },
];

export const AllPersonnes = (request, response) => {
  response.json(personnes);
};

export const PersonneByCIN = (request, response) => {
  const cin = request.params.cin;
  const personne = personnes.find((p) => p.CIN === cin);
  if (personne) {
    response.json(personne);
  } else {
    response.send("n'est pas Personne avec CIN donnée");
  }
};

export const SupprimerPesronne = (request, response) => {
  const cin = request.params.cin;
  personnes = personnes.filter((p) => p.CIN !== cin);
  response.json(personnes);
};

export const AjouterPersonne = (request, response) => {
  const personne = request.body;
  personnes.push(personne);
  response.send(`Pesronne avec CIN : ${personne.CIN} a été Ajoutée `);
};

export const ModifierPersonne = (request, response) => {
  const cin = request.params.cin;
  const { Nom, Prenom, Sexe } = request.body;
  let personne = personnes.find((personne) => personne.CIN === cin);
  personne.Nom = Nom;
  personne.Prenom = Prenom;
  personne.Sexe = Sexe;
  response.send(`Pesronne avec CIN : ${cin} a été Modifiée `);
};
