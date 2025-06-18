# Weekly nerds

## WAFS
### Kylian Valkhof - Rule of least Power
CCS en HTML ipv Javascript
Polypane: Voor het makkelijk responsive maken van een web app. Aanpassingen in grote, kleur, etc.
De minst krachtige taal gebruiken voor een bepaald doel.
CSS en HTML voor het eindresultaat en bepaald de tussenstappen.

Als het met HTML kan, doe het met CSS. ALs dat niet kan met CSS en als dat niet kan met Javascript.

## CSS en BT
### Roel Nieskens - Typografie
Font features kunnen verschillende uiterlijken van letters geven, afhankelijk van letter volgorde of style die je wilt.
Het kan ook zorgen dat er kerning plaatsvindt, wat betekend dat bij bepaalde letter combinaties er een vervangende image kot waarbij de letters minder ruimte tussen elkaar hebben of het hele woorden verandert om ze een ander uiterlijk te geven. ook herkent het bepaalde eenheden en veranderd daarvan het uiterlijk.
Sommige features zijn erg belangrijk voor bepaalde talen.

Veschillende fonts hebben verschillende variaties. Hierbij vertel je aan het font wat je nodig hebt, inplaats van dat je aan het browser verteld wat je nodig hebt. Dit doe je in de @font-face in CSS. Sommige dingen kan het browser nameljk niet wat het font misschien wel kan.

Wakama fondue laat zien wat het font allemaal kan en heeft en laat je het font testen. Alle features en variants en alle code die je nodig hebt om de font te gebruiken.

### Cassie Evans - GSAP
Animate Anything
GSAP is er om alles op een pagina moeiteloos te animeren.
- scroll-driven
- Text
- SVG
- UI interactions
- Others

GSAP gebruikt Tweening om een veel smoothere animatie te krijgen.

### Nils Binder - Design for Flexibility
Niet gaan voor standaart layouts, zoals een 12 point grid. 

### Jeremy Keith - Imperative or declaritive design
Imperative - Javascript.
Hoe het browser demkt.

Declaritive - HTML & CSS.
Hoe de programmeur denkt.

3 steps of desing: 
1- Core Functionality
2- Simplest technology
3- Add enhancements

[Pastels law](https://lawsofux.com/postels-law/):

" Be liberal in what you accept and be conservative in what you send"

oftewel stuur dingen dingen die foutloos zijn en accepteer dingen met fouten. Laat de gebruiker fouten maken in het invullen van input.
Als het niet in hetzelfde format staat als wat verwacht is, is het nog steeds leesbaar dus kan het geaccepteerd worden.

| Save information on user side | |
| ----------- | ----------- |
| Cookies      | Session storage    |
| LocalStorage   | Indexed DB   |
| Cache API |


### Julia Miocene - Animaties met karakter
Lighting and shadows, with colours and blur

Nesting to make it work together
rounded ends and overlap for proper joints. 
And to make it even smoother make more than one part and nest it inside each other.

Voor menselijke animaties, gebruik echte anotomie om te kijken hoe het lichaam werkt en wat dus realistisch is.
(Waar de gewrichten zitten, welke beweging wel kan welke niet

Gebruik custom properties, voor het makkelijker aanpassen van de animatie om het te laten kloppen)

Keyframes hebben niet 20 stappen nodig. Alleen elke nieuwe positie en het browser doet alles ertussen.

Sculpting met clippath en mask




## HCD en API
### Rosa - Circut bending


### Niels Leenheer - Project Fugu
Met Libraries van Niels apparaten koppelen aan site.

Vershillende talen van verschillende apparaten

### Nienke de Keizer - Accesablility Meetup
Veel gemaakte fouten zijn div's die als buttons werken, omdat die voor screenreaders niet werken. Weinig contrast of tekst. De verhouding moet minimaal 3:1 zijn. en in de actieve staat is het beter dat dit nog hoger is.

Veel bedrijven houden bij ontwikkeling van hun apps of webpages geen rekening met accesibility en ontwerpen alleen voor de meerderheid.
Mensen met beperkingen zoals, blinden of slechtziende, slechthorende, fysiek beperkt, etc kunnen hierdoor niet of slecht gebruik maken 
van de applicaties. 
Belangrijk is feedback in de vorm van beweging van actieve of inactieve staat, kleur of geluid. Het contrast tussen kleuren om het beeld duidelijk zichtbaar te maken. Het werken van screen readers

Onderzoek
- vragen aan de mensen die de beperking hebben.
- De mensen die met die mensen werken
- De mensen in het vak waar het probleem ligt


## Meesterproef

### iO Digital
#### Dave Bitter: AI powered Voice interfaces
- Speech recognition web api
- SpeechSynthesis web api'
In combinatie met AI om een app te maken waar je tegen kan praten en antwoorden terug spreekt.
Als het langer duurt voelt het niet meer als een gesprek maar als tegen een robot praten.

Daarom neemt het de audio bestanden in delen en laad het tussen de audio delen, zodat de delen vloeiender achter elkaar door
komen en je niet wacht op antwoorden.

AI is gewoon een databron en de UX eromheen maakt het bijzonder.


#### Steve Jonk : Twitter Follow Bot and unfollow bot
Bot die alle volgers van een twitter account volgt.

Alle volgers van een account ophalen en id's opslaan
vervolgens die accounts volgen die opgeslagen zijn.
Twitter vermijd auto volgen en ontvolgen

N8N, Puppateer, Twitter API, Postgres, Docker, Ubuntu.

Obstacles:
So menselijk mogelijk maken, door tijd intervals.

Scraper: 
Manier van werken, waarbij je alles van een website kan halen en opslaan in een database, zoals de volgers van een twitter account
ophalen en gebruiken. 

#### Clarke Verdel
How do you automate testing your components like a real person?

static tooling - Minste tests
Component
Integration - meeste tests
E2E test

Static tooling: 
- Linting
- JS type checking
- Type script

Component:

Integration:
testen of data tussen systemen gestuurd kan worden.

E2E:
Draaien niet in de browser

Component Browser testing
- Visual checks
- Makkelijker debugging
- meer confidence 


### Q42 

Rijksmuseum site

#### Johan

In de digitale wereld is het aan de ontwerpers om te zorgen dat iedereen je product kan gebruiken.
Mensen hebben geen beperking, maar hun omgeving maakt hun beperkt, omdat het niet gemaakt is om voor
iedereen bruikbaar te zijn.

vanaf 28 juni is de EAA van kracht. WCAG bevat tips om te helpen bij toegankelijkheid voor gebruikers bij ontwerp.

1. Wat als iemand het niet goed kan zien?
2. Wat als iemand niet goed kan horen?
3. Wat als iemand niet goed kan bewegen?
4. Wat als je het niet goed snapt?

##### SenseMath
Een app die wiskundige functies vertaald naar geluid.
Voor mensen die blind zijn om wiskunde te helpen begrijpen. 

Met toonhoogte de vorm van grafieken laten zien en waar ze op de x of y as zitten. 
Toetsenbord zet je vinger op een toets en sleep hem over de toetsen. De toets waar je op zit wordt opgelezen
tot je de goeie hebt, dan laat je los en zet het dat teken neer.

Kopjes zijn de ankerpunten voor een screenreader. Met goeie ankerpunten kan een gebruiker heel makkelijk door een app
of site 

#### Marvin
##### Oculi Mundi
Een digitale display van allemaal oude kaarten van door de geschiedenis.

Elementen in html en css kun je doorheen taben en worden dus ook opgepakt door een screenreader. Met WebGL of andere API's
wordt het al snel niet voor een screenreader leesbaar of door tabbaar.

### Marieke de Hoop - Accessiblity
####

### Pre CSS-day

#### Nils Binder - unwrapping web design
##### CSS wrapper - GRID
wrapper zorgt voor
- een max width
- padding
- en witruimte eromheen

tegenwoordig zou je zo een wrapperinstellen.
width: min(100% - 3rem, 75rem)
margin-inline: auto;

Door figma, tailwind en AI wordt webdsign makkelijker, maar ook veel saaier.
Daarom is het belangrijk om geen vaste grid of layout te gebruiken, om zo 
het design anders en mooier te maken.

minmax(0, ??rem)
maakt een colomn suggestief. Dat betekend dat als de ruimte nodig is voor een andere 
column met een minmax die geen 0 heeft, verdwijnt die column.


#### Miriam Suzanne
##### CSS politics
Gebruikers vriendelijkheid

Wat het web zou moeten zijn. Of de gebruiker het laatste woord zou moeten hebben in het uiterlijk
of dat de maker het zou moeten kunnen bepalen.

Soms is het belangrijk dat gebruikers wel deels belemmerd worden in hun gebruik van het web, omdat soms gebruikers wel fout zitten. Bijvoorbeeld, met haat, racisme, exclusiviteit.

Geef gebruikers de vrijheid om hun web zelf aan te passen aan hun voorkeuren.