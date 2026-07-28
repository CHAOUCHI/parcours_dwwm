# Projet: Tchat TCP (Client/Serveur)

Objectifs pédagogiques
- Comprendre architecture client-serveur et sockets
- Gérer multiples clients (threads ou select)
- Protocolle textuel simple et sérialisation de messages

Contraintes techniques
- Serveur en C écoutant sur un port configurable
- Client console permettant pseudo et envoi/lecture de messages
- Protocole: chaque message se termine par `\n` et contient `[timestamp];pseudo;texte` pour faciliter parsing

Critères d'acceptation
- Le serveur accepte plusieurs clients simultanément
- Les messages sont diffusés à tous les clients connectés
- Le client peut se reconnecter et récupérer un historique minimal (fichier côté serveur)
- La documentation décrit le protocole et commandes (ex: `/quit`, `/nick`)

Milestones
1. MVP: client unique -> serveur echo
2. Multi-clients: serveur multithread ou `select()`
3. Persistance: append messages à un fichier
4. Bonus: salons (rooms) et commandes `/nick` `/join`
