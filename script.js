// --- *** ÄNDRA DETTA DATUM *** ---
const startDate = new Date('2025-04-06');
// ---------------------------------

// Samma data som förut... (hela pregnancyInfo-arrayen)
function getImagePath(weekNumber) {
    const paddedWeek = weekNumber.toString().padStart(2, '0');
    return `images/vecka_${paddedWeek}_gravidkalender.webp`;
}

const pregnancyInfo = [
    { week: 1, title: "Vecka 1: I'm into something good'", description: "Innan graviditeten startar", image: getImagePath(1), youtubeVideoId: "n0J6q42zLH0" },
    { week: 2, title: "Vecka 2: Take my breath away", description: "Själva befruktningen skedde förmodlingen i slutet av den här veckan.", image: getImagePath(2) , youtubeVideoId: "Bx51eegLTY8"},
    { week: 3, title: "Vecka 3: Start me up", description: "Nu fästs ägget i livmodern..", image: getImagePath(3) , youtubeVideoId: "SGyOaCXr8Lw"},
    { week: 4, title: "Vecka 4: Mother(kakan)", description: "Nu finns två typer av celler, dels det som kommer bli barnet och de som kommer bli moderkakan.", image: getImagePath(4) , youtubeVideoId: "uPugn_05Qac"},
    { week: 5, title: "Vecka 5: Tre gringos", description: "Embryot som ska utvecklas till ett foster är nu ungefär en millimeter lång. Embryot består av tre lager med celler. Lagren kommer att bli till olika delar av kroppen. Det översta lagret celler kommer bland annat att bli hjärnan, nervsystemet och huden. Mellanlagret kommer att bli ben, muskler, blodkärl och brosk. Det undre lagret kommer att bilda magsäcken, tarmarna och levern. Nu börjar själva organbildningen", image: getImagePath(5) , youtubeVideoId: "ABae3mpdPPA"},
    { week: 6, title: "Vecka 6: Larger than life", description: "Embryot är nu cirka fyra millimeter lång. Nu utvecklas armar och ben. De inre organen bildas, till exempel magsäck, tarmar och njurar. Hjärnan, ryggmärgen, ryggkotorna och det centrala nervsystemet fortsätter att utvecklas.Fosterhinnorna har bildats. Än så länge finns nästan inget fostervatten.", image: getImagePath(6), youtubeVideoId: "MEb2CecR11I" },
    { week: 7, title: "Vecka 7: I can see clearly now", description: "Embryot är ungefär åtta millimeter lång. Det som ska bli ögon syns som två gropar på var sin sida av huvudet. Ett veck som ska täcka ögat håller på att växa fram. På sidorna av huvudet sitter också några små knoppar. Knopparna ska senare bilda ytterörat. Näsan håller på att utvecklas. Det bildas brosk som kommer att bli till skelettet. Mun och näsa har fortfarande ett gemensamt hål. Där börjar tungan ta form.Armarna och benen växer fram. Händerna börjar synas som små paddlar. Så här tidigt har embryot något som liknar en svans. Den försvinner i vecka 9. Embryot har börjat bilda blod. Hjärtat pumpar runt blodet i de blodkärl som redan har utvecklats.", image: getImagePath(7), youtubeVideoId: "b0cAWgTPiwM" },
    { week: 8, title: "Vecka 8: I like to move it", description: "Embryot är ungefär en och en halv centimeter lång i slutet av veckan. Än så länge mäts längden som en rak linje från huvudet till stjärten. Nu kan embryot göra enkla rörelser. Armen har fått en armbåge. På händerna börjar fingrarna växa. Det är simhud mellan fingrarna. Tårna börjar utvecklas. Ögonen håller på att få ögonlock. Än så länge sitter ögonen långt ut på sidan av huvudet. I munnen bildas gommen, tungan och anlag för tänder. En liten del av tarmen ligger i navelsträngen strax utanför magen. Det beror på att tarmarna växer så snabbt att de inte får plats inne i kroppen än. Nu växer livmodern och blir lika stor som en apelsin, men den går ännu inte att känna utifrån. Det kan kännas som mensvärk när den växer och tar plats. Många kan behöva kissa oftare än vanligt. En orsak kan vara att livmodern trycker mot urinblåsan.", image: getImagePath(8), youtubeVideoId: "hdcTmpvDO0I" },
    { week: 9, title: "Vecka 9: Smells like teen spirit", description: "Embryot är nu runt två centimeter lång. Det börjar få ett ansikte med ögon och öron. Huvudet har fått en nacke. Anlagen till näsan börjar synas. Fingrarna har växt ut längre. Det har tidigare varit simhud mellan fingrarna, men det börjar nu att försvinna. Tårna håller också på att utvecklas. Den svans som tidigare fanns i embryots ryggslut försvinner nu. De inre delarna av könsorganen finns redan. Fostret har antingen äggstockar eller testiklar. Det yttre könsorganet ser nu i början likadant ut hos alla foster.", image: getImagePath(9), youtubeVideoId: "hTWKbfoikeg" },
    { week: 10, title: "Vecka 10: IQ", description: "Nu har de flesta av kroppens organ bildats. I fortsättningen kommer de både växa till och börja fungera. Nervcellerna utvecklas nu intensivt. Fostret är ungefär tre centimeter långt och väger runt fyra gram. Huvudet är lika stort som resten av kroppen. Ögonen och näsan syns tydligt. Tidigare låg ögonen långt ut på sidorna av huvudet, men nu är de nästan på rätt plats. Ytterörats form har bildats genom att de små knopparna på sidorna växt samman.", image: getImagePath(10), youtubeVideoId: "YF1K8JIvPbM"},
    { week: 11, title: "Vecka 11: Trött", description: "Fostret har blivit ungefär fyra centimeter långt. Det har armar och ben och väger runt åtta gram. Nu börjar könsorganet få sin form. Ögonen har täckts av tunna ögonlock. Fostrets lungor har kommit en bit i sin utveckling. De är nu fyllda av fostervatten. Fram till nu har tarmarna legat i navelsträngen. Nu börjar de dra sig in i fostrets mage, där det finns plats för dem. Där växer också levern, bukspottkörteln och andra organ till. Graviditeten syns oftast inte så här tidigt, men du kan känna av olika förändringar som har med graviditeten att göra. Det är till exempel vanligt att känna sig trött.", image: getImagePath(11), youtubeVideoId: "vTv3w9TbBRw"},
    { week: 12, title: "Vecka 12: En apa som liknar dig", description: "Moderkakan och navelsträngen ger nu näring och syre till fostret. Fostret är ungefär fem centimeter långt och väger knappt 15 gram. Fostret har tunn, genomskinlig hud. På fingertopparna börjar det unika fingeravtrycket att bildas. Överläppen får sin amorbåge och fingernaglarna blir tydligare. Nu kan fostret röra både armar och ben. Ansiktsdragen har börjat komma fram. Grunden till alla organ och funktioner finns på plats, men det är ännu långt kvar tills utvecklingen är färdig.", image: getImagePath(12) , youtubeVideoId: "dMg8eteVTnk"},
    { week: 13, title: "Vecka 13: Material Girl", description: "Fostret har fått lite mer vatten kring sig och kan röra sig mer obehindrat. Det är ungefär sex centimeter långt och väger cirka 60 gram. Fostret ökar alltså mycket i vikt på kort tid. Ögonen sitter fortfarande brett isär och öronen sitter långt ner. Skelettet har hittills varit mjukt, men håller på att hårdna. Under tiden i magen har fostret en särskilt anpassad blodcirkulation. Hjärtat pumpar runt blodet, men det passerar inte lungorna på samma sätt som efter födseln. Eftersom fostret inte behöver använda lungorna ännu tar blodet en genväg genom hjärtat. Därför finns ett hål mellan hjärtats två förmak. När barnet föds och tar sitt första andetag sluts hålet. Livmodern växer i en jämn takt. Du som är gravid kan ha svårt att komma i dina vanliga kläder. Risken för missfall minskar betydligt nu. ", image: getImagePath(13), youtubeVideoId: "6p-lDYPR2P8" },
    { week: 14, title: "Vecka 14: Bä bä vita lamm", description: "Fostret har blivit 7–8 centimeter långt, mätt från huvud till stjärt. Det har fått händer och fötter, fingrar och tår. Huden är tunn och genomskinlig. Den är täckt av små tunna hårstrån som kallas ullhår, eller lanugo. Nu kan fostret röra sig i fostervattnet. Det har också börjat svälja. Kroppsdelarna är tydliga. Livmodern är nu ungefär lika stor som en grapefrukt. För en del gravida börjar tröttheten släppa lite och de börjar nu bli piggare.", image: getImagePath(14) , youtubeVideoId: "ZTzI2m7YPHM"},
    { week: 15, title: "Vecka 15: Hot lips", description: "Fostret fortsätter att växa. Nu väger det ungefär 80 gram. Den här veckan blir det lite mer än 9 centimeter långt, mätt från topp till tå. Nu kan fostret få in tummen i munnen. Läpparna börjar få en fylligare form. Nervsystemet är inte särskilt utvecklat än, så fostret kan inte styra sina rörelser. Nu lagrar fostret kalcium. Därför är det bra om du som är gravid tänker på att äta en varierad kost. Hur magen växer är olika, men många behöver använda större kläder vid den här tiden.", image: getImagePath(15) , youtubeVideoId: "dw0vcw99RjM"},
    { week: 16, title: "Vecka 16: Moves like Jagger", description: "Fostret är cirka 12 centimeter långt och väger runt 100 gram. Skelettet blir allt hårdare. Nervsystemet fungerar. Det märks genom att fostret rör sig annorlunda, vilket syns vid en ultraljudsundersökning. Rörelserna är mer samordnade. Fostret har gott om plats att röra sig i magen. Fostret kan höra. Det rycker till om det kommer ett plötsligt ljud nära magen. Ljudnivån inne i magen är dämpad och skyddar bra. Det låter ungefär som om du ligger i badet med öronen under vattnet. Men fostret hör hela tiden de ljud som finns inne i magen, till exempel från hjärtat och tarmarna. Många gravida känner sig nu piggare och illamåendet kan ha försvunnit. Magen fortsätter att växa.", image: getImagePath(16) , youtubeVideoId: "iEPTlhBmwRg"},
    { week: 17, title: "Vecka 17: Het", description: "Fostret är nu ungefär 15 centimeter och vikten ungefär 135 gram. Kroppen växer fort. I början av graviditeten är huvudet mycket större än kroppen. Men nu börjar kroppen växa ikapp.  Fostret lagrar in så kallat brunt fett i kroppen. Det hjälper till att hålla kroppen varm efter födelsen. En del av det bruna fettet försvinner så småningom. Nu börjar också fosterfett att bildas. Det ligger som ett skyddande lager utanpå den ömtåliga huden. Många gravida svettas mer än de brukar. Det beror på att blodkärlen är mer utvidgade och att mer blod flödar runt i kroppen.", image: getImagePath(17) , youtubeVideoId: "K_H_-Z7jnE0"},
    { week: 18, title: "Vecka 18: Savoy truffle", description: "Fostret väger nu 170 gram. Det är 20 centimeter långt och har börjat lagra mer fett i kroppen. Fingrar och tår börjar se mer färdiga ut. Det går att ana alla de små linjer som senare kommer att bli fingeravtryck. Du som är gravid ökar i vikt. Det finns rekommendationer på ungefär hur mycket man bör gå upp i förhållande till sitt BMI. Men hur mycket man går upp är olika från person till person. Prata med barnmorskan om vad som gäller för just dig. Läs om hur du räknar ut ditt BMI. En del tycker att det är jobbigt att magen växer och kroppen förändras. Barnmorskan kan hjälpa dig, till exempel om du har en ätstörning eller om du har haft det tidigare. Läs mer om ätstörning under graviditeten.", image: getImagePath(18) , youtubeVideoId: "z9EaBjFvQpc"},
    { week: 19, title: "Vecka 19: Faith", description: "Fostret är nu ungefär 22 centimeter långt. Det väger runt 220 gram och kan knäppa sina händer. Fosterfettet är tjockt och täcker hela fostret. Fostret har även fått små tunna hårstrån över hela kroppen. Hårstråna skyddar den känsliga huden och de kommer att falla av innan barnet är fött. Det finns anlag för mjölktänderna. Det finns även anlag för de permanenta tänderna som barnet ska få senare. Du som är gravid kan nu känna livmodern. Den känns som en hård klump om du trycker försiktigt med handen under naveln. Livmodern är ungefär lika stor som huvudet på ett nyfött barn.", image: getImagePath(19) , youtubeVideoId: "6Cs3Pvmmv0E"},
    { week: 20, title: "Vecka 20: Livin' on a prayer", description: "Halva graviditeten har gått. Så här långt har alla foster växt ungefär lika mycket varje vecka. Men från och med nu blir det större skillnader mellan olika foster. Fostret väger ungefär 280 gram. Det är ungefär 24 centimeter långt. Det kanske har fått ögonfransar och lite hår på huvudet. Svettkörtlarna blir färdiga nu, men fostret kommer inte att börja svettas förrän efter födseln. Fostret har fått känsel och kan känna smärta. Det kan göra avancerade rörelser som till exempel bakåtkullerbytta. Många gravida kan nu känna att fostret rör sig i magen. Rörelserna kan kännas som fladder eller svepningar. För andra dröjer det ytterligare innan de känner rörelser. Livmodern växer och magen blir större. Storleken på magen varierar från person till person. Det går inte att jämföra magen på gravida som är i samma vecka. Från och med nu växer magen mer regelbundet.", image: getImagePath(20) , youtubeVideoId: "lDK9QqIzhwk"},
    { week: 21, title: "Vecka 21: Relax, take it easy", description: "Nu har alla organ bildats, men det kommer att ta många veckor innan de har mognat och börjar fungera. Fostret har blivit ungefär 26 centimeter långt. Det har ökat i vikt till omkring 400 gram. Det kan höra och reagerar på både ljud och ljus. Fostret har det lugnt och bra i livmodern. Det behöver inte göra av med mycket energi. Det är fortfarande väldigt outvecklat och skulle inte kunna överleva utanför magen. Många gravida upplever att en behaglig tid börjar. Humöret brukar vara mer stabilt. Gravidmagen syns ofta väl, men är inte alltför stor och tung. Viktuppgången är olika för olika personer.", image: getImagePath(21) , youtubeVideoId: "RVmG_d3HKBA"},
    { week: 22, title: "Vecka 22: Är du vaken Lars?", description: "Fostret blundar hela tiden, men kan se ljus och mörker genom de tunna ögonlocken. Vikten har ökat till 450 gram, längden till 27 centimeter. Du som är gravid kan ha lättare att få hål i tänderna. Hormonerna påverkar tandköttet. Du kan märka att tandköttet lättare blir inflammerat. Det är viktigt att vara noga med tandborstningen.", image: getImagePath(22) , youtubeVideoId: "_miBL7E3wd8"},
    { week: 23, title: "Vecka 23: Dansa, pausa", description: "Livmodern når nu strax över naveln. Du kan känna den som en hård stor klump om du trycker försiktigt med handen mot magen. Fostret väger runt 550 gram. Det är 28 centimeter långt. Fostret rör sig mycket. Det är vanligt att känna mer rörelser på kvällen. Redan nu finns en chans att barnet överlever om hen skulle födas för tidigt. Det kan kännas när fostret hickar, ett regelbundet pickande som pågår någon minut. Långt ifrån alla känner när barnet hickar. Det är vanligt att folk kommenterar och tycker att gravidmagen är stor eller liten. Magens storlek är olika från person till person. Barnmorskan mäter att magen växer som beräknat.  ", image: getImagePath(23) , youtubeVideoId: "Sk9MSeE1l80"},
    { week: 24, title: "Vecka 24: Heart skips a beat", description: "Fostret väger cirka 600 gram. Det är ungefär 30 centimeter långt. Huden börjar bli tjockare och täcks av fosterfett. Nu kan fostret suga på tummen, det är en träning av sugreflexen. De små blodkärlen i lungorna växer som mest mellan vecka 16 och vecka 24. Barnet kan klara av att andas luft om hen skulle födas den här veckan. Men lungorna behöver utvecklas mer. Ofta behöver barn som föds så tidigt hjälp med andningen, till exempel av en respirator. Hörseln är väl utvecklad. Fostret känner igen röster och kan höra hjärtslag. Barnets rörelser kan kännas utanpå magen.  ", image: getImagePath(24) , youtubeVideoId: "j5dFe-WKuPs"},
    { week: 25, title: "Vecka 25: Memories", description: "Fostret är ungefär 33 centimeter och väger runt 700 gram. Fostret kan knyta sina händer och få tag på sina fötter. Känseln utvecklas. Tvillingar reagerar på beröring från sitt syskon. Näsan utvecklas. Näsborrarna som tidigare varit stängda börjar nu öppna sig. Fostret liknar alltmer ett nyfött barn i kroppens proportioner. Ett korttidsminne har utvecklats och fostret kan känna igen röster och ljud. Fostret har en egen dygnsrytm. Det sover och är vaket med jämna mellanrum. Nu känns fostrets rörelser varje dag. Många foster rör sig mycket medan andra är mer stillsamma. Alla gravida har olika magar. På en del börjar graviditeten synas först nu. Andra fick större mage för länge sen.", image: getImagePath(25) , youtubeVideoId: "SlPhMPnQ58k"},
    { week: 26, title: "Vecka 26: Jag går och fiskar", description: "Nu utvecklar fostret sina lungor. Det tränar på att andas genom att dra in och ut fostervatten i lungorna. Fostret kan öppna och stänga sina ögon. Längden är cirka 35 centimeter och vikten är 800 till 900 gram. Fostret kan höra ljud som röster och nysningar. En del gravida får åderbråck. Åderbråck är när blodådrorna blir utvidgade.", image: getImagePath(26) , youtubeVideoId: "o3JrCEE793c"},
    { week: 27, title: "Vecka 27: Pumped up kicks", description: "Livmodern har vuxit så att den översta delen på livmodern nu finns mellan naveln och revbenen. Fostret är omkring 37 centimeter långt och det väger knappt ett kilo. Vissa barn kommer att födas med mycket hår, medan andra inte har något hår alls när de föds. Det finns ännu gott om plats för fostret att röra sig på. Många foster är mer vakna på kvällen. Då kan det sparka mer i magen. När fostret rör sig tränas musklerna så att det blir starkare i kroppen.Ibland går det att känna en liten fot som trycker mot magen. Det är fostret som prövar sina krafter. Du kanske kan känna hur det trycker emot när du försiktigt trycker tillbaka. Graviditeten upplevs ofta mer verklig när magen växer och det går att känna fosterrörelserna utanpå.", image: getImagePath(27) , youtubeVideoId: "SDTZ7iX4vTQ"},
    { week: 28, title: "Vecka 28: Arg", description: "Fostret är cirka 39 centimeter långt och väger drygt ett kilo. Det har stora chanser att överleva om det skulle födas nu. Fostret kan fortfarande vända sig ett tag till. De flesta brukar sedan lägga sig tillrätta med huvudet nedåt i ingången till bäckenet. En del lägger sig istället på sidan eller med stjärten nedåt.  Du som är gravid kan känna att känslorna och humöret svänger, precis som i början av graviditeten. Livmodern är ofta så stor att det kan vara svårt att röra sig som vanligt. Mjölkkörtlarna i brösten förbereder sig på att producera mjölk. Den första mjölken kallas råmjölk och kan läcka från brösten redan nu.", image: getImagePath(28) , youtubeVideoId: "RlZyuuF8cHk"},
    { week: 29, title: "Vecka 29: I dreamed a dream", description: "Fostret är ungefär 40 centimeter långt och väger nu runt 1,2 kilo. Du som är gravid kan känna att fostret sparkar så hårt att det kan ömma på någon punkt. Fostret är nu tillräckligt stort för att kunna sparka på dina revben och mot urinblåsan. Fostret har fortfarande gott om plats att ändra läge. Det kan ligga med huvudet både uppåt och neråt. Fostret kan drömma nu. Fostret och livmodern fortsätter att växa. För dig som är gravid blir det mer trångt i magen, dina inre organ får det trängre. Från livmodern ner mot ljumsken går ligament. När livmodern växer och ligamenten tänjs ut kan det göra ont. Det kan stråla ut mot ljumsken och blygdläpparna. Det brukar kallas ligamentsmärtor. Efter förlossningen drar banden ihop sig och besvären går över. Det är vanligt med sammandragningar. Ett bra sätt att dämpa dem är att slappna av och lägga sig och vila.  Det kan synas utanpå magen att fostret sparkar. Det är vanligt att gravida känner mycket sparkar. En del känner mindre än andra.", image: getImagePath(29) , youtubeVideoId: "mS5Om47vsaA"},
    { week: 30, title: "Vecka 30: The final countdown", description: "Fostret väger ungefär 1,4 kilo. Från och med nu kan det skilja mycket i vikt mellan olika foster. Det växer mycket och kommer att öka med ungefär 150 gram – 200 gram i veckan fram till förlossningen. Fostret är omkring 41 centimeter långt. Gener påverkar att vissa barn blir större och andra mindre. Det spelar också roll hur moderkakan fungerar. Fostret har så gott om plats att det kan vända sig. Ibland ligger det med stjärten nedåt, och ibland med huvudet nedåt. Först om några veckor behöver det lägga sig tillrätta med huvudet nedåt. Nu har tre fjärdedelar av graviditeten gått. Det är bara tio veckor kvar. Det kan vara bra att fundera lite över hur det kommer att bli när barnet har kommit ut. Passa på att göra sådant som du gissar blir krångligare sedan. Du som är gravid kan lätt bli andfådd. Det beror bland annat på att lungornas volym ändras under graviditeten. ", image: getImagePath(30) , youtubeVideoId: "9jK-NcRmVcw"},
    { week: 31, title: "Vecka 31: Let's dance", description: "Fostret väger cirka 1,6 kilo. Längden är ungefär 43 centimeter. Fingernaglarna har vuxit ut ännu mer och når fingertoppen. Fostret kan fixera blicken och ser bättre skillnad på ljus och mörker. Det kan känna igen och reagera på musik. Livmodern börjar närma sig revbenens nedre kant. Många gravida känner sig tunga och otympliga. Det är olika från person till person hur mycket man ökar i vikt.  Du som är gravid andas ut och in mer luft än vanligt vid varje andetag. Ändå är det lätt att känna sig andfådd. Tryck från den växande livmodern kan bidra ytterligare till det känns tungt att andas. Många gravida känner av att kroppen innehåller mer vatten än vanligt. Stödstrumpor kan hjälpa om benen blir svullna och tunga. Det kan också hjälpa att ligga eller halvsitta med benen i högläge.", image: getImagePath(31) , youtubeVideoId: "VbD_kBJc_gI"},
    { week: 32, title: "Vecka 32: Andas", description: "Fostret väger cirka 1,8 kilo och är ungefär 44 cm långt. En del foster har redan lagt sig med huvudet nedåt, för andra dröjer det längre. Det är vanligare hos förstföderskor att barnet lägger sig med huvudet nedåt tidigt. Fostret börjar bli för stort för att röra sig fritt i fostervattnet och sparkarna blir mer som knuffar. För dig som är gravid tar magen mycket plats. Lungor, urinblåsa och magsäck har det trångt. För en del gravida kommer det lite mjölk ur brösten. ", image: getImagePath(32) , youtubeVideoId: "eVzPISwGqLo"},
    { week: 33, title: "Vecka 33: Fat", description: "Fostret ökar snabbt i vikt och väger nu cirka 2 kilo. Längden är ungefär 45 centimeter. Det finns gott om fostervatten i livmodern, vanligtvis nästan en liter. Vattnet gör så att fostret skyddas i livmodern. Det blir lättare för fostret att röra sig när det finns gott om fostervatten. Det gör så att livmodern inte trycker direkt mot fostret. Fostervattnet har ingen färg men är lite grumligt. Det har en lukt som påminner om hav och tång. Fostret kan uppfatta ljus och mörker, natt och dag. En del barn föds för tidigt. För tidigt födda barn behöver särskild vård de första veckorna. De kan behöva hjälp med andningen. De kan behöva extra värme. De kan även behöva hjälp att få i sig tillräckligt med näring. Barnmorskan mäter magen på dig som är gravid. Måttet visar hur fostret växer. ", image: getImagePath(33) , youtubeVideoId: "t2mU6USTBRE"},
    { week: 34, title: "Vecka 34: I always feel like, somebody's watching me", description: "Nu väger fostret ungefär 2,3 kilo och är cirka 46 centimeter långt. Många foster ligger nu med huvudet nedåt. Inne i magen finns det många ljud. Fostret lyssnar till hjärtslag, magen som kurrar och andra kroppsljud. Efter förlossningen vill barnet fortsätta vara nära och lyssna till kroppsljud.", image: getImagePath(34) , youtubeVideoId: "7YvAYIJSSZY"},
    { week: 35, title: "Vecka 35: Aj, aj, aj", description: "Fostret väger ungefär 2,4 kilo. Det har blivit knappt 47 centimeter långt. De flesta ligger nu med huvudet neråt. Fostret gör andningsrörelser så att det kommer fostervatten i lungorna. Fostret sväljer också fostervatten. Det hjälper till att utveckla lungorna och matsmältningen. Fostret har lagt på sig mer fett. Huden är tjockare, mindre genomskinlig och slätare. Det ulliga hår som tidigare funnits på kroppen är borta. Huden är i stället täckt av rikligt med skyddande fosterfett. Huden kan se vit och kletig ut av allt fett, om barnet skulle födas nu. En del gravida kan få ont över revbenen. Det kan bero på att livmodern är så stor att den når till revbenen. Det kan kännas bra att sträcka på sig. Så här långt in i graviditeten brukar ledbanden och musklerna i korsryggen mjukas upp. Det kan göra så att du får ont i ryggen. Barnet trycker på överallt. Det kan vara svårt att andas, sitta, stå och sova.", image: getImagePath(35) , youtubeVideoId: "JiYEniHaou8"},
    { week: 36, title: "Vecka 36: Bättre och bättre dag för dag", description: "Fostret börjar förbereda sig på att födas. Det tränar andning, men inte när det sover djupt. Fostret har nu längre perioder av både sömn och aktivitet. Det rör sig lika ofta som förut men kan inte ta ut rörelserna på samma sätt. I stället för puffar gör fostret mer svepande rörelser. Fostret lägger på sig ungefär 14 gram fett varje dag. Den här veckan väger det runt 2,6 kilo. Tidigare har mängden fostervatten ökat. Från och med nu kan mängden fostervatten tvärtom minska i stället. Nu står magen som högst, för att snart sjunka ner lite. Då blir det lite lättare att andas igen. För en del läcker det råmjölk ur brösten. Barnet får all sin näring via moderkakan. Det är vanligt att få lättare förvärkar, som mensvärk ungefär. Nu är det tid att ta reda på telefonnummer och adress till förlossningsavdelningen där barnet ska födas. Är du osäker kan du fråga en barnmorska på barnmorskemottagningen.", image: getImagePath(36) , youtubeVideoId: "jNzhVwWoqGA"},
    { week: 37, title: "Vecka 37: Getting to the point", description: "Nu väger fostret ungefär 3 kilo och är cirka 48 centimeter långt, men det skiljer sig mycket mellan olika foster. Fostret tränar sina lungor genom att dra in och trycka ut fostervatten. Lungorna är de sista organen som mognar. Många barn sjunker djupare ner i bäckenet nu. Barnmorskan brukar säga att huvudet har blivit fixerat. Det betyder att barnet har sjunkit ner så långt att huvudet inte går att rucka på utifrån. För många gravida har brösten redan börjat producera råmjölk. Bäckenet är utvidgat. Den sista tiden kan du få svårt att sova. ", image: getImagePath(37) , youtubeVideoId: "BSbvZMLJjeU"},
    { week: 38, title: "Vecka 38: Upside down", description: "Från och med nu betraktas fostret som fullgånget. Det betyder att det är färdigt att födas. I den här veckan väger fostret drygt 3 kilo. Det är omkring 49 centimeter långt. De allra flesta ligger med huvudet nedåt. Förlossningen är påfrestande även för barnet. Men barnet är väl förberedd och har till exempel lagrat extra näring. Underhudsfettet fungerar som energireserv den första tiden efter födseln. De flesta av alla barn som föds i Sverige kommer ut mellan vecka 37+0 och 41+6. När fostrets huvud har sjunkit ner i bäckenet brukar du som är gravid känna att det bli mer plats upptill i magen. Då känns det lättare att andas och att äta igen. Allt fler känner förvärkar. En del gravida kan uppleva en ilande känsla när fostrets huvud stöter emot nerverna och musklerna i bäckenbotten. Vissa ökar i vikt under hela graviditeten, andra stannar av mot slutet. Kontakta barnmorskan vid plötslig viktökning eller viktnedgång.", image: getImagePath(38) , youtubeVideoId: "hDHW5wXBvLw"},
    { week: 39, title: "Vecka 39: Antiboodyy, yeaaahh", description: "Fostret väger cirka 3,2 kilo och är ungefär 50 centimeter långt. Det är redo att födas. Fostret har fått näring och antikroppar via moderkakan. Det kommer hjälpa till att skydda barnet den första tiden efter förlossningen. Fostrets hjärna utvecklas hela tiden. Tånaglarna har vuxit ut nu och täcker hela tåspetsen. I början av graviditeten är livmodertappen riktad bakåt. Nu börjar livmodertappen att riktas mer framåt. Den drar också ihop sig och blir kortare. Den gör sig redo för förlossningen. Många gravida känner sig tunga och trötta. En del har kraftiga förvärkar. Det är bra att sova och äta ordentligt för att orka med förlossningen. Det gäller även dig som är blivande medförälder.", image: getImagePath(39) , youtubeVideoId: "6M6samPEMpM"},
    { week: 40, title: "Vecka 40: Varning på stan", description: "Det är olika hur mycket ett foster väger och hur långt det är. Men i genomsnitt väger det ungefär 3,5 kilo och är cirka 51 centimeter långt. Moderkakan väger runt ett halvt kilogram. Den kommer att fortsätta att ge fostret näring ännu en tid. En del har redan fött barn vid den här tiden. För andra kan det dröja ännu längre innan förlossningen sätter igång. En graviditet varar oftast från 37 till 42 veckor.  Du kan inte själv påskynda en förlossning. Det finns huskurer som sägs påverka, men varken gå i trappor, ha sex eller annat har vetenskapliga belägg för att sätta igång förlossningen. Det är viktigt att vila och äta regelbundet i väntan på att förlossningen ska starta.", image: getImagePath(40) , youtubeVideoId: "IfU3PxXFF0Q"},
    { week: 41, title: "Vecka 41: Länge har vi väntat", description: "Många har redan fått barn nu. För andra är det snart dags. Från vecka 40 fortsätter du som är gravid att träffa barnmorskan med jämna mellanrum. Hen gör de vanliga kontrollerna: mäter livmodern, kontrollerar hur barnet ligger, kollar blodtryck och lyssnar på barnets hjärta. En del får lämna extra urinprov eller blodvärde. De allra flesta förlossningar kommer igång av sig själv. Några som går över tiden kan behöva sättas igång.", image: getImagePath(41) , youtubeVideoId: "hNuC-ZS__f4"},

];


// ---- NYTT: Variabler för att hålla koll på tillstånd ----
let currentPregnancyWeek;
let displayedWeek;

// ---- NYTT: Hämta referenser till element i DOM ----
const weekTitleElement = document.getElementById('week-title');
const weekImageElement = document.getElementById('week-image');
const weekDescriptionElement = document.getElementById('week-description');
const youtubeContainer = document.getElementById('youtube-container');
const weekVideoElement = document.getElementById('week-video');
const prevWeekBtn = document.getElementById('prev-week-btn');
const nextWeekBtn = document.getElementById('next-week-btn');

// ---- NYTT: Funktion som visar information för en specifik vecka ----
function displayWeekInfo(weekNumber) {
    // Spara den visade veckan
    displayedWeek = weekNumber;

    // Återställ video och container
    weekVideoElement.src = "";
    youtubeContainer.style.display = 'none';

    // Hitta datan för den valda veckan
    const weekData = pregnancyInfo.find(info => info.week === weekNumber);

    document.getElementById('current-week-info').style.display = 'block';

    if (weekData) {
        weekTitleElement.textContent = weekData.title;
        weekImageElement.src = weekData.image;
        weekImageElement.alt = weekData.title;
        weekDescriptionElement.textContent = weekData.description;

        weekImageElement.onerror = function() {
            this.onerror = null;
            this.src = `https://via.placeholder.com/400x300.webp?text=Bild+saknas+för+vecka+${weekNumber}`;
            this.alt = `Bild saknas för vecka ${weekNumber}`;
        };

        if (weekData.youtubeVideoId && weekData.youtubeVideoId.trim() !== "" && !weekData.youtubeVideoId.startsWith("[")) {
            weekVideoElement.src = `https://www.youtube.com/embed/${weekData.youtubeVideoId}`;
            youtubeContainer.style.display = 'block';
        }

    } else {
        weekTitleElement.textContent = `Information för vecka ${weekNumber}`;
        weekImageElement.src = `https://via.placeholder.com/400x300.webp?text=Info+saknas+för+vecka+${weekNumber}`;
        weekImageElement.alt = `Information saknas för vecka ${weekNumber}`;
        weekDescriptionElement.textContent = "Information för denna vecka har inte lagts till ännu i mallen.";
    }

    // Uppdatera knapparnas status
prevWeekBtn.disabled = (displayedWeek <= 1);

    // Dölj "Nästa vecka"-knappen om vi är på den nuvarande veckan (eller senare)
    if (displayedWeek >= currentPregnancyWeek) {
        nextWeekBtn.style.display = 'none';
        nextWeekBtn.disabled = true;
    } else {
        // Annars, se till att den visas (om vi har gått tillbaka från den nuvarande veckan)
        nextWeekBtn.style.display = 'block';
        nextWeekBtn.disabled = false;
    }
}

// ---- NYTT: Funktion som körs när sidan laddas ----
function initializeTracker() {
    const currentDate = new Date();
    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const current = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    const timeElapsedElement = document.getElementById('time-elapsed');

    if (start > currentDate) {
        timeElapsedElement.textContent = "Graviditeten har inte börjat än";
        weekTitleElement.textContent = "Graviditeten har inte börjat än";
        weekImageElement.src = "images/placeholder_waiting.webp";
        weekImageElement.alt = "Väntar";
        weekDescriptionElement.textContent = "Kom tillbaka när startdatumet har passerats.";
        document.getElementById('current-week-info').style.display = 'block'; // Visa meddelandet
        prevWeekBtn.disabled = true;
        nextWeekBtn.disabled = true;
        return; // Avsluta här
    }

    const diffMilliseconds = current - start;
    const totalDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
    const completedWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    currentPregnancyWeek = completedWeeks + 1;

    let outputString = `${completedWeeks} + ${remainingDays}`;
    timeElapsedElement.textContent = `Nuvarande: Vecka ${outputString}`;

    // Visa den aktuella veckan när sidan laddas
    displayWeekInfo(currentPregnancyWeek);
}

// ---- NYTT: Event Listeners för knapparna ----
prevWeekBtn.addEventListener('click', () => {
    if (displayedWeek > 1) {
        displayWeekInfo(displayedWeek - 1);
    }
});

nextWeekBtn.addEventListener('click', () => {
    if (displayedWeek < pregnancyInfo.length) {
        displayWeekInfo(displayedWeek + 1);
    }
});

// Kör funktionen när sidan har laddats
initializeTracker();
