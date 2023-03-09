# Finger exercise bbox

Gegeben ist eine [Feature Collection](./test/assets/featureCollection.js). Jedes Feature der Collection besitzt eine Punktgeometrie.

Aufgabe:
Ermittle die [Bounding Box](https://en.m.wikipedia.org/wiki/Minimum_bounding_box) der Feature Collection.

Hierzu ist die Funktion ```bboxFromFeatureCollection``` in der Datei ```src/bbox.js``` entsprechend zu implementieren.
Diese wird in einem Test mit der o.g. Feature Collection verwendet und die Rückgabe der Funktion entsprechend getestet.

Hinweis:
- Number.MIN_VALUE
- Number.MAX_VALUE