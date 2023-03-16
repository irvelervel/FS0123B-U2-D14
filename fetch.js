// fetch è il metodo più moderno per inviare una request da un client
// una request rappresenta una "richiesta" inviata da un browser/smartphone per:
// 1) chiedere dei dati (GET)
// 2) creare nuove risorse (POST)
// 3) modificare una risorsa già esistente (PUT)
// 4) eliminare una risorsa già esistente (DELETE)
// queste 4 operazioni in gergo vengono definite CRUD (create, read, update, delete)
// sono alla base delle interazioni con il PERSISTENT STORAGE

// una volta che un server riceve una request, la processerà e invierà indietro una
// response ("risposta"). Questa response, in un mondo perfetto, conterrà sempre
// il risultato dell'operazione richiesta
// se la response ha avuto esito positivo lo status code che otteremo indietro sarà
// nella "famiglia" dei 200

// senza specificare il metodo HTTP da usare, fetch userà di default GET
// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then((response) => {
//     console.log('FINITA LA FETCH!')
//     console.log(response)
//     if (response.ok) {
//       return response.json()
//     } else {
//       // controllo aggiuntivo su response.ok
//       // questa riga vi fa finire automaticamente nel .catch()
//       return new Error('Problema nel parsing della response')
//     }
//   })
//   .then((photos) => {
//     console.log("ora è finita l'estrapolazione dei dati")
//     console.log('photos', photos)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// ASYNC AWAIT
// async/await è un metodo ALTERNATIVO per la gestione delle Promise
// permette sostanzialmente di trattare il codice asincrono come se fosse codice "sincrono"
// è sufficiente preporre la parola "await" prima di un metodo che ritorna una Promise
// la risoluzione della Promise verrà "aspettata" (await) prima di assegnarne il risultato
// ad una variabile. l'unica cosa da ricordare è che la funzione che ospita l'utilizzo
// della parola "await" deve essere definita "async"

// ricorda che il metodo async/await NON dispone di un controllo di errore integrato
// come .then() e .catch()
// la migliore prassi è incapsulare il proprio codice (che può fallire) dentro un blocco
// try/catch, in modo da poter recuperare, catchare l'errore e in caso gestirlo

const getPhotos = async function () {
  try {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/photosKASDSAKJDH'
    )
    console.log(response)
    if (response.ok) {
      // se response.ok è true significa che la fetch è andata a buon fine
      // e allora proseguo cercando di leggerne il body
      let photos = await response.json()
      console.log(photos)
    } else {
      // 404, 401, 500
      // siamo riusciti a contattare il server, ma c'è stato un problema con
      // l'elaborazione della risposta
    }
  } catch (error) {
    console.log(error)
    // questo blocco catch è per errori MOOOLTO generici, ad es. la mancanza di connessione
    // internet
  }
}

getPhotos()
