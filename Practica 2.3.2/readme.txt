Desenvolupa la següent pàgina fent ús de HTML5 y CSS3 i seguint les instruccions
següents. El contingut de la pàgina es lliure, però ha de ser suficient per veure el
aspecte general de la pàgina proposta. Al finalitzar aquesta pàgina te que passar les
validacions de W3C.
Capçalera
A la capçalera <head> de la pàgina cal:
• modificar el títol <title> de la pàgina
• afegir l'etiqueta <meta name = "viewport" ... /> necessària en dispositius mòbils
• afegir l'etiqueta <link rel = "stylesheet" ... /> d'enllaç al full d'estil
Posicionament
Els paràgrafs tenen forma quadrada i tenen tots la mateixa mida, independentment del
contingut, el que es pot aconseguir donant el mateix valor a les propietats width i
height.
Les noticies es mostren una al costat de l'altra formant una trama rectangular. A més,
al fer zoom o al estrènyer o eixamplar la finestra, el nombre de noticies per fila s'ajusta
automàticament. Això es pot aconseguir amb posicionament flotant.
Si la mida del paràgraf és prou gran, no cal definir la propietat overflow, encara que per
precaució es pot incloure en el full d'estil.
Com que no hi ha cap element després de les noticies, no cal utilitzar la propietat clear
en cap element.
La lletra inicial de cada paràgraf (pseudo-element: first-letter) té posicionament flotant.
Estils
Aquestes són les propietats CSS a utilitzar (pots afegir més):
 Pàgina (body):
 -color de fons: background-color
 -tipus de lletra: font-family
 Títol principal (h1):
 -marge: margin
 -color: color
 -mida de lletra: font-size
 -separació de lletres: letter-spacing 
 -alineació: text-align
 -majúscules: text-transform
 Paràgraf (p):
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
 -primer caràcter del paràgraf (p: first-letter):
 -posicionament flotant: float
 -color: color
 -mida de lletra: font-size
 -cursives: font-style
 -interlineat: line-height 