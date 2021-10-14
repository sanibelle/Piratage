# GTI525 : Devoir de familiarisation à REST et node.js

----
 **Votre nom:** Antoine Chagnon Michaud
 
 **Correction:**
 5/5 Excellent travail!
 Voici le lien pour la réservation d'un autocollant Github:
https://github-sticker.herokuapp.com/?key=55fd006c-e01d-48c2-840d-f524393eefab

----

Ce devoir vous permettra de vous familiariser avec les outils de développement Git, Heroku, MongoDB et node.js. Il a pour but de vous faire travailler avec un API REST typique et de comprendre comment ils fonctionnent, pour finalement vous permettre de créer votre propre API.

## Réalisation du devoir

### Partie 1: Utilisation d'un API

Visitez le site https://exercice-api-gti525.herokuapp.com/

Analysez le code source de l'application sur https://github.com/gti525/exercice-intro-api, en particulier la page api.js.

Trouvez le moyen de soumettre un message en votre nom à cette application. Vous devrez trouver les méthodes d'API à exécuter à l'aide d'un plugiciel REST tel que Postman pour Chrome ou RESTClient pour Firefox.

Soyez attentifs au format de soumission des données. La révision de la théorie du cours 4 pourrait vous aider sur les formats de données et les méthodes HTTP.

### Partie 2: Création d'un API d'affichage des données

Pour cette étape, vous devez créer un API qui fournira le message à afficher sur la page, au lieu de le fournir manuellement. Vous devez populer ce repository Github afin de fournir le code de l'API. Le repository est vide mais il devrait être simple de vous inspirer de l'application. Il vous est aussi possible d'utiliser une autre solution d'API.

Vous aurez besoin de créer un API REST qui pourra fournir un hyperlien pointant vers votre message. Cet API doit être disponible publiquement, par exemple via une application hébergée sur Heroku.  L'application mentionnée au point 1 vous fournit les instructions et une structure de projet de base pour ce faire.

Votre API doit fournir une méthode accessible via HTTP GET qui retournera dans le corps de la requête un objet JSON dont le format sera:

`{
	"message": "votre message ici"
}` 

Il n'est pas nécessaire d'utiliser une base de données, à cette étape les informations peuvent être inclues dans le code.

Lorsque votre API sera fait, vous pourrez remplacer votre message crée à l'étape 1 par celui de votre API. Une méthode distincte est utilisée pour fournir l'hyperlien de votre API.

### Partie 3: Création d'un API de modification du message

Vous devez ajouter une méthode à votre API pour modifier le message que votre API fournit. Il doit être possible de remplacer le message en utilisant exactement le même URL que votre API mais avec la méthode PUT au lieu de GET.

## Pointage
Le devoir est corrigé sur 5 points. Chacun des éléments suivants sont corrigés:

* La page affiche votre message: +1 points
* Le message affiché provient d'un API: +2 points
* Votre API fournit un mécanisme pour changer le message que l'API retourne: +1 point
* Le code hébergé dans votre Repository Github est de qualité, aucun fichier inutile est présent et le tout est documenté adéquatement: +1 point

## Remise

La correction sera effectuée directement dans votre repository Github, dans ce fichier readme.
