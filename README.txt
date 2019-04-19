Migration Angular 5 -> 7
========================

Installer la derniere version d'Angular :

npm install -g @angular/cli
npm install @angular/cli
ng update @angular/cli

Mettre a jour RxJS et TypeScript :

ng update @angular/core

Mettre a jour les autres dependances :

ng update
-> We analyzed your package.json and everything seems to be in order. Good work!

ng serve affiche l'erreur :

The serve command requires to be run in an Angular project, but a project definition could not be found.

Mettre a jour le projet :

ng update @angular/cli --migrate-only --from=1.7.3

Maintenant il manque rxjs-compat :

npm i rxjs-compat


Pourquoi migrer ?
=================

- Pour avoir les dernieres corrections (securite, performances, ...) ;
- Pour avoir les dernieres fonctionnalites.