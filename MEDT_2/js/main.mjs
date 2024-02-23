
// Die let Variable zum wert1 soll sich in der Datei variables.mjs befinden
import {inZahlUmwandeln} from "./functions.mjs";
import {wert1, wert2} from "./variables.mjs";

wert1 = prompt("Bitte geben Sie den ersten Wert ein:");
wert2 = prompt("Bitte geben Sie den zweiten Wert ein:");

// Von einem textuellen wert → numerischen wert
wert1 = inZahlUmwandeln(wert1);
wert2 = inZahlUmwandeln(wert2);

alert(wert1); // Corrected the colon to a semicolon