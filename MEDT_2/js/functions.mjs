import { wert1, wert2, operation, ergebnis, neu, history, text01 } from './variables.mjs';
/********************************************************************************/
/* 
					functions.mjs
*/
/********************************************************************************/


/********************************************************************************/
/*
Function inZahlUmwandeln(wert)

Beschreibung der Parameter:
wert: Der Parameter wert enthält einen numerischen oder textuellen Wert

Beschreibung:
Die Funktion versucht den mitgegebenen Wert in einen nummerischen Wert 
umzuwandeln und nutzt hierfür die Funktion Number().
Liefert diese Funktion den Wert NaN zurück wird eine entsprechende 
alert() Meldung ausgegeben "Beim eingegebenen Wert handelt es sich nicht um eine
Zahl oder Ziffer"
*/
/********************************************************************************/
export function inZahlUmwandeln(wert) {
    if(isNaN(Number(wert))) {
        alert("Beim eingegebenen Wert handelt es sich nicht um eine Zahl oder Ziffer")
        return -1
    } else if(Number(wert) <= 0) {
        alert("Beim eingegebenen Wert handelt es sich um eine Ziffer die 0 oder negativ ist")
        return -1
    }
    else return Number(wert)
}

/********************************************************************************/
/*
Function inOperation(operation)

Beschreibung der Parameter:
operation: Der Parameter wert enthält einen textuellen Wert

Beschreibung:
Die Funktion versucht den mitgegebenen Wert eine angemessene operation zuzuordnen
Entweder +, -, *, /, %, ²
alert() Meldung ausgegeben "Beim eingegebenen Wert handelt es sich nicht um eine
Zahl oder Ziffer"
*/
/********************************************************************************/
function inOperation(operation){
    switch(operation){
        case  '+','-','*','/','%','²':
            return true
        default:
            return false
    }
}

/*
Function berechne(wert1,wert2,operation)
Beschreibung der Parameter:
wert1: eine zahl
wert2: auch eine Zahl angeblich
operation: kann entweder +, -, *, /, %, ²
Beschreibung:
return: eine zahl
*/
/********************************************************************************/
function berechne(wert1, wert2, operation) {
    if (inZahlUmwandeln(wert1) !== -1 && inZahlUmwandeln(wert2) !== -1 && inOperation(operation)) {
        switch (operation) {
            case '+':
                ergebnis = wert1 + wert2
                break
            case '-':
                ergebnis = wert1 - wert2
                break
            case '*':
                ergebnis = wert1 * wert2
                break
            case '/':
                ergebnis = wert1 / wert2
                break
            case '%':
                ergebnis = wert1 % wert2
                break
            case '²':
                ergebnis = wert1 + wert2 * wert1 + wert2
                break
            default:
                if (inZahlUmwandeln(wert1) !== -1) {
                    alert("Die erste zahl ist leider ungültig :[")
                    ergebnis = -1
                } else if (inZahlUmwandeln(wert2)) {
                    alert("Die zweite Zahl ist leider ungültig :[")
                    ergebnis = -1
                } else {
                    alert("Die rechenoperation ist leider ungültig :[")
                    ergebnis = -1
                }
        }
    }
}


/*
Function speicherInArray(wert1,wert2,operation, ergebnis)
*/
/********************************************************************************/
/*
Beschreibung der Parameter:
wert1: eine zahl
wert2: auch eine Zahl angeblich
operation: kann entweder +, -, *, /, %, ²
ergebnis: das ergebnis der Rechnung
*/
/********************************************************************************/
function speicherInArray(wert1, wert2, operation, ergebnis){
    history.push([{wert1, wert2, operation, ergebnis}])
}


/*
Function neueRechnungOdUebersicht(neu)
*/
/********************************************************************************/
/*
Beschreibung der Parameter:
neu: ein boolean wert der bestimmt, ob eine neue gerechnet wird
*/
/********************************************************************************/
function neueRechnungOderUebersicht(neu){
    alert(
        'Für die Steuerung der neuen Rechnung, des Abbruchs oder der Übersicht, bietet sich eine weitere Benutzerabfrage an, die folgenden Operatoren an:\n' +
        '\n' +
        '"neu" neue Rechnung\n' +
        'e... exit\n' +
        'o... Overview - zeigt die Rechnungen aus dem History Array an.\n' +
        'alle übrigen Eingaben, beenden den Rechner')
    switch (neu){
        case neu === 'neu', 'e', 'o':
            return true
        default:
            alert("Ungültig, Sie müssen entweder (neu/oder irgen) eingeben")
            return false
    }
}

/*
Function ausgabe()
/********************************************************************************/
/*
Beschreibung der Parameter:
void: keine parameter
*/
/********************************************************************************/

/*
Einschränkung: Die Ausgabe kann auf viele verschiedene Arten erfolgen. 
Ihr sollt eine der 3 folgenden auswählen:

1) document.write(wert)
Beispiel: document.write("<h2>Das Ergebnis lautet:</h2>"+wert);

2) console.log(wert);
Beispiele: console.log("Das Ergebnis lautet:"+wert); 

3) alert(wert)
Beispiel: alert("Das Ergebnis lautet:"+wert);

Beschreibung der Parameter:
... Hier ausfüllen ...
Beschreibung:
... Hier ausfüllen ...

/********************************************************************************/
function ausgabe() {
    return alert(text01 + '' + ergebnis)
}