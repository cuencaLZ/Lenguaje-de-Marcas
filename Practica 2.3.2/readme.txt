Desenvolupa la seg�ent p�gina fent �s de HTML5 y CSS3 i seguint les instruccions
seg�ents. El contingut de la p�gina es lliure, per� ha de ser suficient per veure el
aspecte general de la p�gina proposta. Al finalitzar aquesta p�gina te que passar les
validacions de W3C.
Cap�alera
A la cap�alera <head> de la p�gina cal:
� modificar el t�tol <title> de la p�gina
� afegir l'etiqueta <meta name = "viewport" ... /> necess�ria en dispositius m�bils
� afegir l'etiqueta <link rel = "stylesheet" ... /> d'enlla� al full d'estil
Posicionament
Els par�grafs tenen forma quadrada i tenen tots la mateixa mida, independentment del
contingut, el que es pot aconseguir donant el mateix valor a les propietats width i
height.
Les noticies es mostren una al costat de l'altra formant una trama rectangular. A m�s,
al fer zoom o al estr�nyer o eixamplar la finestra, el nombre de noticies per fila s'ajusta
autom�ticament. Aix� es pot aconseguir amb posicionament flotant.
Si la mida del par�graf �s prou gran, no cal definir la propietat overflow, encara que per
precauci� es pot incloure en el full d'estil.
Com que no hi ha cap element despr�s de les noticies, no cal utilitzar la propietat clear
en cap element.
La lletra inicial de cada par�graf (pseudo-element: first-letter) t� posicionament flotant.
Estils
Aquestes s�n les propietats CSS a utilitzar (pots afegir m�s):
 P�gina (body):
 -color de fons: background-color
 -tipus de lletra: font-family
 T�tol principal (h1):
 -marge: margin
 -color: color
 -mida de lletra: font-size
 -separaci� de lletres: letter-spacing 
 -alineaci�: text-align
 -maj�scules: text-transform
 Par�graf (p):
 -posicionament flotant: float
 -ample: widht
 -alt: height
 -visibilitat d'elements que no hi caben: overflow
 -vora: border
 -marge: margin
 -marge interior: padding
 -color de fons: background-color
 -mida de lletra: font-size
 -cursives: font-style
 -primer car�cter del par�graf (p: first-letter):
 -posicionament flotant: float
 -color: color
 -mida de lletra: font-size
 -cursives: font-style
 -interlineat: line-height 