Desenvolupa la seg�ent p�gina fent �s de HTML5 y CSS3 i seguint les instruccions
seg�ents. Al finalitzar aquesta p�gina te que passar les validacions de W3C.
Cap�alera
A la cap�alera <head> de la p�gina
� modificar el t�tol <title> de la p�gina
� afegir l'etiqueta <meta name = "viewport" ... /> necess�ria en dispositius m�bils
� afegir l'etiqueta <link rel = "stylesheet" ... /> d'enlla� al full d'estil
Seccions
A la vista amb estil es reconeixen agrupacio
vora com�, per a les quals t� sentit utilitzar seccions.
El dibuix seg�ent mostra una possible elecci� d'elements de seccions per a aquesta
p�gina:
Selectors, CSS i capes HTML.
Desenvolupa la seg�ent p�gina fent �s de HTML5 y CSS3 i seguint les instruccions
seg�ents. Al finalitzar aquesta p�gina te que passar les validacions de W3C.
A la cap�alera <head> de la p�gina cal:
modificar el t�tol <title> de la p�gina
afegir l'etiqueta <meta name = "viewport" ... /> necess�ria en dispositius m�bils
afegir l'etiqueta <link rel = "stylesheet" ... /> d'enlla� al full d'estil
A la vista amb estil es reconeixen agrupacions amb color de fons com� o amb una
vora com�, per a les quals t� sentit utilitzar seccions.
El dibuix seg�ent mostra una possible elecci� d'elements de seccions per a aquesta
Desenvolupa la seg�ent p�gina fent �s de HTML5 y CSS3 i seguint les instruccions
seg�ents. Al finalitzar aquesta p�gina te que passar les validacions de W3C.
afegir l'etiqueta <meta name = "viewport" ... /> necess�ria en dispositius m�bils
afegir l'etiqueta <link rel = "stylesheet" ... /> d'enlla� al full d'estil
ns amb color de fons com� o amb una
El dibuix seg�ent mostra una possible elecci� d'elements de seccions per a aquesta 
� la p�gina t� un t�tol principal <h1> inserit en una secci� <header>.
� Els continguts s'agrupen en dues seccions <section>, agrupades en un bloc
<main>
� en cada <section> hi ha:
 un t�tol <h2> amb la categoria dels continguts que haveu triat
 la informaci� de cadascuna de les categories
� en cada <article> hi ha:
 un t�tol <h3> amb el nom
 un par�graf <p> amb una descripci�
A l'encap�alament <header> se li d�na posicionament fix, per� es podria haver donat
posicionament fix a <h1> i no haver creat la secci� <header>.
Al bloc <main> se li d�na un marge superior bastant gran perqu� es mostri inicialment
darrere del <header>. Es podria no haver creat el bloc <main>, per� llavors a la
primera secci� <section> se li hauria d'haver donat una classe o un identificador per
donar-li un marge superior m�s gran que a la segona secci�.
En aquest exercici s'han utilitzat seccions <section>, per� no se'ls aplica cap propietat
CSS, de manera que es podrien ometre.
En comptes de les etiquetes <article> i <section>, es podrien haver utilitzat nom�s una
o altra, o haver-les utilitzat l'inrev�s.
Posicionament
L'�nic element amb posicionament d'aquesta p�gina �s la cap�alera <header>,
concretament amb posicionament fix. Se situa al principi de la p�gina amb top: 0, left:
0, ocupant tot l'espai amb width: 100%. No cal donar-li al�ada.
Com la cap�alera t� posicionament, no es t� en compte en col�locar la resta
d'elements de la p�gina. Perqu� el bloc <main> no s'amagui darrere de la cap�alera,
se li pot donar un margin gran (expressat en rem, perqu� sigui proporcional al tipus de
lletra).
Estils
Aquestes s�n les propietats CSS a utilitzar (pots afegir m�s):
P�gina (body):
 marge: margin
 color de fons: background-color
 tipus de lletra: font-family
 mida de lletra: font-size
 alineaci�: text-align 
Cap�alera (header):
 posicionament: position
 dist�ncia a la vora superior: top
 ample: ample
 color de fons: background-color
 color: color
T�tol principal (h1):
 marge: margin
 mida de lletra: font-size
 Bloc principal (main):
 tipus de caixa: display
 marge: margin
T�tol de secci� (h2):
 marge: margin
 color de fons: background-color
 color: color
 mida de lletra: font-size
 alineaci�: text-align
Article (article):
 ample: ample
 r�dio de la vora: border-radius
 marge: margin
 marge interior inferior: padding-bottom
 color de fons: background-color
T�tol d'article (h3):
 r�dio de la vora superior esquerra: border-top-left-radius
 r�dio de la vora superior dret: border-top-right-radius
 marge: margin
 marge interior esquerre: padding-left
 color de fons: background-color
 color: color
 mida de lletra: font-size
Par�graf (p):
 marge: margin 