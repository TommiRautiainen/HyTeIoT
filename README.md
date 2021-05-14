# IoT

## Mikä Iot?
IoT:n avulla liiketoiminnasta tulee datavetoista.
- IIoT = Industrial Internet of Things
- IoT = Internet of Things
IoT järjestelmissä ohjelmistoilla luodaan älykkyyttä fyysisiin tuotteisiin.
IIoT:n sovelluksia voidaan hyödyntää myös mm. terveydenhuollossa.
## Sääasemajärjestelmien toimintakaavio
### IoT-järjestelmän rakenne
IIoT:ta käytetään:
- Etävalvontaan, etähallintaan, optimointiin ja etäpäivitykseen.
- Ennakoivaan huoltopalveluun ja analytiikkaan.
- Datapohjaiseen palveluliiketoimintaan.
- Älykkäiden tehtaiden ja autonomisten tuotteiden luomiseen.
IIoT:n sovelluksia voidaan hyödyntää myös mm. terveydenhuollossa. Potilaiden hoidon tehoa ja tasoa voidaan seurata uudenlaisilla mittareilla. Logistiikkaan ja kaluston hallintaa voidaan myös tehostaa.
###  Kuva sääaseman rakenteesta
![Sääaseman rakenne](/piirrustus_rakenne.png)
### Laitteistot
Particle Photon –kehityskortti vastaanottaa sähköisen suureen ja muuttaa sen digitaaliseen muotoon.
Koodaajan ohjelmoiman Firmware (=laiteohjelmisto) –koodin ansiosta kehityskortin prosessori osaa kirjoittaa saamansa tiedon asteina ja prosentteina konsoliin ja lähettää datan Webhookilla eteenpäin.
Particle Photonin laiteohjelmisto kirjoitetaan Web IDE:llä (Integrated Development Environment).
### Komponentit
#### Anturit
##### Kuuleva anturi
Se kuuleva anturi on perjaatteessa vaa mikrofoni mikä lähettää dataa johonkin.
Antureilla voitaisiin vähentää vanhaintaloissa kelloon perustuvia tarkastuksia ja voitaisiin vain kuunnella antureilla tarvitseeko vanhus apua vai ei.
Anturi voi tunnistaa vaikka aseen laukauksen, särkyvän lasin tai agressiiviset ärräpäät.
##### Tunteva anturi
Tunteva anturi "tuntee" asioita ympärillään ja lähettää siitä dataa johonkin.
Tuntosensoreilla voi vaikka seurata lehmän hyvinvointia että kuinka monta kertaa lehmä heilauttaa häntäänsä sitä paremmin se voi.
Sensori voi vaikka tunnistaa kosteuden ympäristössä esim: ihmisen mahassa.
##### Haistava anturi
Se mittaa ilmasta esimerkiksi laivan päästöjä eli rikkidioksidia ja lähettää siitä tietoa.
Näitä antureita voisi laittaa vaikka kouluihin tai muualle tunnistamaan jos hometta alkaa tulemaan.
Haistava anturi voi tunnistaa vaikka hometta paljon nopeammin kuin ihminen.
##### Näkevä anturi
Näkevä anturi on kuin valvontakamera siinä voi olla vaikka liiketunnistin jotta se alkaa kuvaamaan kun joku asia liikkuu.
Näkeviä antureita voisi laittaa johonkin sisälle jotta kukaan joka vaikka murtautuu sinne ei pääse huomaamatta.
Näkevä anturi voi huomata jos vaikka kuormasta on tippunut jotain matkan aikana.
##### DHT 11 anturi
Sääasema –projektissa käytetään DHT11 –anturia, joka mittaa ilman lämpötilaa ja ilmankosteutta.
Anturi muuttaa lämpötilan ja ilmankosteuden sähköiseksi suureeksi.
Sähköinen suure viedään piirilevyllä johdinta pitkin Particle Photon kehityskortille. 
### Palvelut

### Ohjelmointi
![koodia](/koodi1.png)
![koodia](/koodi2.png)
![photon](/kirjasto.png)
![photon](/photonkoodi.png)
![photon](/photondata.png)
### Toiminta

## Käytetyt kehitysympäristöt
Repl.IoT
Github
Particle Photon 
Microsoft Azure
## Termihakemisto

## Viitteet
