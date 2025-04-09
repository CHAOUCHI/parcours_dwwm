# Recevoir le body de la requete HTTP du client.

Pour récupérer le body de la rêquete http du client il faut écouter l'événemment `data`, il nous fournit le *body* du client lorsqu'il arrive.

*server.mjs*
```js
import http from "http";


http.createServer((req,res)=>{
    
    req.on("data",(body)=>{
        
        
        console.log(body)

        req.end(body);
    })

}).listen(4004);
```

> A l'inverse des headers le body peut être très volumineux, voilà pourquoi les concepteurs de nodejs on décider de rendre son accès asyncrone.

1. Lancez le serveur

```bash
node server.mjs
```

