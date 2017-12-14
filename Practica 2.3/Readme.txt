Desenvolupa la següent pàgina fent ús de HTML5 y CSS3 i seguint les instruccions
següents. Al finalitzar aquesta pàgina te que passar les validacions de W3C.
Capçalera
A la capçalera <head> de la pàgina
• modificar el títol <title> de la pàgina
• afegir l'etiqueta <meta name = "viewport" ... /> necessària en dispositius mòbils
• afegir l'etiqueta <link rel = "stylesheet" ... /> d'enllaç al full d'estil
Seccions
A la vista amb estil es reconeixen agrupacio
vora comú, per a les quals té sentit utilitzar seccions.
El dibuix següent mostra una possible elecció d'elements de seccions per a aquesta
pàgina:
Selectors, CSS i capes HTML.
Desenvolupa la següent pàgina fent ús de HTML5 y CSS3 i seguint les instruccions
següents. Al finalitzar aquesta pàgina te que passar les validacions de W3C.
A la capçalera <head> de la pàgina cal:
modificar el títol <title> de la pàgina
afegir l'etiqueta <meta name = "viewport" ... /> necessària en dispositius mòbils
afegir l'etiqueta <link rel = "stylesheet" ... /> d'enllaç al full d'estil
A la vista amb estil es reconeixen agrupacions amb color de fons comú o amb una
vora comú, per a les quals té sentit utilitzar seccions.
El dibuix següent mostra una possible elecció d'elements de seccions per a aquesta
Desenvolupa la següent pàgina fent ús de HTML5 y CSS3 i seguint les instruccions
següents. Al finalitzar aquesta pàgina te que passar les validacions de W3C.
afegir l'etiqueta <meta name = "viewport" ... /> necessària en dispositius mòbils
afegir l'etiqueta <link rel = "stylesheet" ... /> d'enllaç al full d'estil
ns amb color de fons comú o amb una
El dibuix següent mostra una possible elecció d'elements de seccions per a aquesta 
• la pàgina té un títol principal <h1> inserit en una secció <header>.
• Els continguts s'agrupen en dues seccions <section>, agrupades en un bloc
<main>
• en cada <section> hi ha:
 un títol <h2> amb la categoria dels continguts que haveu triat
 la informació de cadascuna de les categories
• en cada <article> hi ha:
 un títol <h3> amb el nom
 un paràgraf <p> amb una descripció
A l'encapçalament <header> se li dóna posicionament fix, però es podria haver donat
posicionament fix a <h1> i no haver creat la secció <header>.
Al bloc <main> se li dóna un marge superior bastant gran perquè es mostri inicialment
darrere del <header>. Es podria no haver creat el bloc <main>, però llavors a la
primera secció <section> se li hauria d'haver donat una classe o un identificador per
donar-li un marge superior més gran que a la segona secció.
En aquest exercici s'han utilitzat seccions <section>, però no se'ls aplica cap propietat
CSS, de manera que es podrien ometre.
En comptes de les etiquetes <article> i <section>, es podrien haver utilitzat només una
o altra, o haver-les utilitzat l'inrevés.
Posicionament
L'únic element amb posicionament d'aquesta pàgina és la capçalera <header>,
concretament amb posicionament fix. Se situa al principi de la pàgina amb top: 0, left:
0, ocupant tot l'espai amb width: 100%. No cal donar-li alçada.
Com la capçalera té posicionament, no es té en compte en col·locar la resta
d'elements de la pàgina. Perquè el bloc <main> no s'amagui darrere de la capçalera,
se li pot donar un margin gran (expressat en rem, perquè sigui proporcional al tipus de
lletra).
Estils
Aquestes són les propietats CSS a utilitzar (pots afegir més):
Pàgina (body):
 marge: margin
 color de fons: background-color
 tipus de lletra: font-family
 mida de lletra: font-size
 alineació: text-align 
Capçalera (header):
 posicionament: position
 distància a la vora superior: top
 ample: ample
 color de fons: background-color
 color: color
Títol principal (h1):
 marge: margin
 mida de lletra: font-size
 Bloc principal (main):
 tipus de caixa: display
 marge: margin
Títol de secció (h2):
 marge: margin
 color de fons: background-color
 color: color
 mida de lletra: font-size
 alineació: text-align
Article (article):
 ample: ample
 ràdio de la vora: border-radius
 marge: margin
 marge interior inferior: padding-bottom
 color de fons: background-color
Títol d'article (h3):
 ràdio de la vora superior esquerra: border-top-left-radius
 ràdio de la vora superior dret: border-top-right-radius
 marge: margin
 marge interior esquerre: padding-left
 color de fons: background-color
 color: color
 mida de lletra: font-size
Paràgraf (p):
 marge: margin 