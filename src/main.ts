// Schritt 1: Deklariert eine Variable vom Typ 'number' mit dem Namen 'age' und weist ihr einen Wert zu.
let age: number = 42

// Schritt 2: Schreibt eine 'for'-Schleife, die die Zahlen von 1 bis 'age' ausgibt.
for (let i: number = 1; i <= age; i++) {
    console.log(i)
}

// Schritt 3: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'age' größer als 18 ist.
// Gebt entsprechende Meldungen aus, je nachdem ob die Bedingung erfüllt ist oder nicht.
if (age > 18) {
    console.log('age is greater than 18')
}
console.log('age is not greater than 18')

// Schritt 4: Deklariert eine Variable 'score' vom Typ 'number' und weist ihr den Wert 0 zu.
let score: number = 0

// Schritt 5: Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'score' einen Wert hat.
// Gebt 'Score ist verfügbar.' aus, wenn 'score' einen Wert ungleich 0 hat.
if (score !== 0) {
    console.log('Score ist verfügbar.')
}

// Schritt 6: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'score' als 'truthy' Wert ausgewertet wird.
// Gebt 'Score wird als truthy ausgewertet.' aus, wenn 'score' als 'truthy' gilt.
if (score) {
    console.log('Score wird als truthy ausgewertet.')
}
console.log('Score wird als falsy ausgewertet.')

// Schritt 7: Deklariert eine Variable 'username' vom Typ 'string' und weist ihr den Wert '' (leerer String) zu.
let username: string = ''

// Schritt 8: Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'username' einen Wert hat.
// Gebt 'Username ist verfügbar.' aus, wenn 'username' einen Wert hat.
if (username) {
    console.log('Username ist verfügbar.')
}
console.log('Username ist nicht verfügbar.')

// Schritt 9: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'username' als 'falsy' Wert ausgewertet wird.
// Gebt 'Username wird als falsy ausgewertet.' aus, wenn 'username' als 'falsy' gilt.
if (!username) {
    console.log('Username wird als falsy ausgewertet.')
}
console.log('Username wird als truthy ausgewertet.')

// Schritt 10: Deklariert eine Variable 'isAdmin' vom Typ 'boolean' und weist ihr den Wert 'false' zu.
let isAdmin: boolean = false

// Schritt 11: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'isAdmin' als 'truthy' Wert ausgewertet wird.
// Gebt 'isAdmin wird als truthy ausgewertet.' aus, wenn 'isAdmin' als 'truthy' gilt.
if (isAdmin) {
    console.log('isAdmin wird als truthy ausgewertet.')
} else {
    console.log('isAdmin wird als falsy ausgewertet.')
}

// Schritt 12: Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'isAdmin' 'false' ist.
// Gebt 'isAdmin ist false.' aus, wenn 'isAdmin' den Wert 'false' hat.
if (isAdmin == false) {
    console.log('isAdmin ist false.')
} else {
    console.log('isAdmin ist true.')
}
