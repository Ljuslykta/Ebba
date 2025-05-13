// --- *** ÄNDRA DETTA DATUM *** ---
// Ange startdatumet (vanligtvis sista mensens första dag) i formatet: 'ÅÅÅÅ-MM-DD'
const startDate = new Date('2024-04-08'); // Exempel: 1 januari 2024
// ---------------------------------

// Information om graviditetsveckor
// Du behöver fylla på denna lista med information för alla veckor!
// Bilderna kan du antingen ladda upp till en 'images'-mapp i ditt repo,
// eller länka till bilder online (se till att du har rättigheter att använda dem).
const pregnancyInfo = [
    {
        week: 1, // Vecka 1 (tekniskt sett inte gravid än, men räknas ofta från sista mens)
        title: "Vecka 1: Förberedelser i kroppen",
        description: "Detta är veckan för din sista menstruation innan en eventuell graviditet. Kroppen förbereder sig för ägglossning. Ännu har ingen befruktning skett.",
        image: "images/week1.jpg" // Byt ut mot images/week1.jpg om du har en lokal bild
    },
    {
        week: 2,
        title: "Vecka 2: Ägglossning",
        description: "Under denna vecka sker vanligtvis ägglossningen. Om ett ägg befruktas av en spermie är det nu det sker, oftast i slutet av veckan.",
        image: "images/week2.jpg"
    },
    {
        week: 3,
        title: "Vecka 3: Befruktning och implantation",
        description: "Om befruktning skett, börjar det befruktade ägget (zygoten) sin resa mot livmodern och delar sig snabbt. I slutet av veckan kan det implantera sig i livmoderslemhinnan. Du är nu tekniskt sett gravid!",
        image: "images/week3.jpg"
    },
    {
        week: 4,
        title: "Vecka 4: Embryot utvecklas",
        description: "Embryot är nu ungefär lika stort som ett vallmofrö. Moderkakan börjar bildas. Du kanske börjar misstänka att du är gravid då mensen uteblir.",
        image: "images/week4.jpg"
    },
    {
        week: 5,
        title: "Vecka 5: Hjärtat börjar slå",
        description: "Embryot är nu ungefär 1-2 mm långt. Hjärnan, ryggmärgen och hjärtat börjar utvecklas. Små knoppar som ska bli armar och ben kan synas. Hjärtat kan börja slå denna vecka!",
        image: "images/week5.jpg"
    },
    // --- FYLL PÅ MED FLER VECKOR HÄR ---
    // Exempel för en senare vecka:
    {
        week: 20,
        title: "Vecka 20: Halvvägs!",
        description: "Du är nu halvvägs genom graviditeten! Fostret är ca 16 cm långt (huvud till stjärt) och väger runt 300 gram. Du kan förmodligen känna fosterrörelser tydligt. Det är vanligt med ultraljud runt denna vecka.",
        image: "https://via.placeholder.com/400x300.png?text=Vecka+20"
    },
    {
        week: 40,
        title: "Vecka 40: Beräknad födsel",
        description: "Fostret är fullgånget och redo att födas! De flesta födslar sker mellan vecka 38 och 42. Fostret är nu cirka 50 cm långt och väger i genomsnitt 3,4 kg.",
        image: "https://via.placeholder.com/400x300.png?text=Vecka+40"
    }
];


function calculateTimeElapsed() {
    const currentDate = new Date();
    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const current = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    const diffMilliseconds = current - start;
    const totalDays = Math.max(0, Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24)));
    const completedWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    // Den aktuella graviditetsveckan är antalet slutförda veckor + 1
    // (t.ex. om 0 veckor och 1 dag har gått, är man i vecka 1)
    const currentPregnancyWeek = completedWeeks + 1;

    const timeElapsedElement = document.getElementById('time-elapsed');
    let outputString = `${completedWeeks} fullgångna veckor och ${remainingDays} dagar`;
    if (completedWeeks === 1) outputString = outputString.replace("veckor", "vecka");
    if (remainingDays === 1) outputString = outputString.replace("dagar", "dag");
    timeElapsedElement.textContent = `Du är i vecka ${currentPregnancyWeek}. (${outputString} har förflutit)`;

    // Visa information för aktuell vecka
    const weekTitleElement = document.getElementById('week-title');
    const weekImageElement = document.getElementById('week-image');
    const weekDescriptionElement = document.getElementById('week-description');

    // Hitta informationen för den aktuella graviditetsveckan
    const weekData = pregnancyInfo.find(info => info.week === currentPregnancyWeek);

    if (startDate > currentDate) { // Om startdatumet är i framtiden
        weekTitleElement.textContent = "Graviditeten har inte börjat än";
        weekImageElement.src = "https://via.placeholder.com/400x300.png?text=Väntar...";
        weekImageElement.alt = "Väntar";
        weekDescriptionElement.textContent = "Kom tillbaka när startdatumet har passerats.";
    } else if (weekData) {
        weekTitleElement.textContent = weekData.title;
        weekImageElement.src = weekData.image; // Använder länken från datan
        weekImageElement.alt = weekData.title; // Bra för tillgänglighet
        weekDescriptionElement.textContent = weekData.description;
    } else if (currentPregnancyWeek > pregnancyInfo[pregnancyInfo.length -1].week) { // Efter sista definierade veckan
        weekTitleElement.textContent = "Efter beräknad födsel";
        weekImageElement.src = "https://via.placeholder.com/400x300.png?text=Grattis%3F";
        weekImageElement.alt = "Efter beräknad födsel";
        weekDescriptionElement.textContent = `Graviditeten har passerat vecka ${pregnancyInfo[pregnancyInfo.length -1].week}. Om barnet inte har kommit än, kontakta din barnmorska.`;
    }
    else {
        weekTitleElement.textContent = `Information för vecka ${currentPregnancyWeek}`;
        weekImageElement.src = "https://via.placeholder.com/400x300.png?text=Info+saknas";
        weekImageElement.alt = `Information saknas för vecka ${currentPregnancyWeek}`;
        weekDescriptionElement.textContent = "Information för denna vecka har inte lagts till ännu.";
    }
}

calculateTimeElapsed();