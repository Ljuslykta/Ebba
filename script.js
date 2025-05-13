// --- *** ÄNDRA DETTA DATUM *** ---
// Ange startdatumet (vanligtvis sista mensens första dag) i formatet: 'ÅÅÅÅ-MM-DD'
const startDate = new Date('2025-04-08'); // Exempel: 1 januari 2024
// ---------------------------------

// Funktion för att generera bildnamn enligt det nya formatet
function getImagePath(weekNumber) {
    const paddedWeek = weekNumber.toString().padStart(2, '0'); // Lägger till inledande nolla om < 10
    return `images/vecka_${paddedWeek}_gravidkalender.webp`;
}

// Information om graviditetsveckor - MALL FÖR 42 VECKOR
// Fyll i 'title' och 'description' för varje vecka.
// Se till att du har bilder namngivna enligt formatet vecka_XX_gravidkalender.webp i en 'images'-mapp.
const pregnancyInfo = [
    {
        week: 1,
        title: "Vecka 1: Innan starten",
        description: "Innan graviditeten startar",
        image: getImagePath(1) // "images/vecka_01_gravidkalender.webp"
    },
    {
        week: 2,
        title: "Vecka 2: Befruktningen",
        description: "Själva befruktningen skedde förmodlingen i slutet av den här veckan.",
        image: getImagePath(2)
    },
    {
        week: 3,
        title: "Vecka 3: Implantationen",
        description: "Nu fästs ägget i livmodern..",
        image: getImagePath(3)
    },
    {
        week: 4,
        title: "Vecka 4: Moderkakan",
        description: "Nu finns två typer av celler, dels det som kommer bli barnet och de som kommer bli moderkakan.",
        image: getImagePath(4)
    },
    {
        week: 5,
        title: "Vecka 5: Tre lager",
        description: "Embryot som ska utvecklas till ett foster är nu ungefär en millimeter lång. Embryot består av tre lager med celler. Lagren kommer att bli till olika delar av kroppen. Det översta lagret celler kommer bland annat att bli hjärnan, nervsystemet och huden. Mellanlagret kommer att bli ben, muskler, blodkärl och brosk. Det undre lagret kommer att bilda magsäcken, tarmarna och levern. Nu börjar själva organbildningen",
        image: getImagePath(5)
    },
    {
        week: 6,
        title: "Vecka 6: Fortsatt tillväxt",
        description: "Embryot är nu cirka fyra millimeter lång. Nu utvecklas armar och ben. De inre organen bildas, till exempel magsäck, tarmar och njurar. Hjärnan, ryggmärgen, ryggkotorna och det centrala nervsystemet fortsätter att utvecklas.Fosterhinnorna har bildats. Än så länge finns nästan inget fostervatten.",
        image: getImagePath(6)
    },
    {
        week: 7,
        title: "Vecka 7: Ögonen tittar fram",
        description: "Embryot är ungefär åtta millimeter lång. Det som ska bli ögon syns som två gropar på var sin sida av huvudet. Ett veck som ska täcka ögat håller på att växa fram. På sidorna av huvudet sitter också några små knoppar. Knopparna ska senare bilda ytterörat. Näsan håller på att utvecklas. Det bildas brosk som kommer att bli till skelettet. Mun och näsa har fortfarande ett gemensamt hål. Där börjar tungan ta form.Armarna och benen växer fram. Händerna börjar synas som små paddlar. Så här tidigt har embryot något som liknar en svans. Den försvinner i vecka 9. Embryot har börjat bilda blod. Hjärtat pumpar runt blodet i de blodkärl som redan har utvecklats.",
        image: getImagePath(7)
    },
    {
        week: 8,
        title: "Vecka 8: [Fyll i titel här]",
        description: "[Fyll i information om vecka 8 här.]",
        image: getImagePath(8)
    },
    {
        week: 9,
        title: "Vecka 9: [Fyll i titel här]",
        description: "[Fyll i information om vecka 9 här.]",
        image: getImagePath(9)
    },
    {
        week: 10,
        title: "Vecka 10: [Fyll i titel här]",
        description: "[Fyll i information om vecka 10 här.]",
        image: getImagePath(10) // "images/vecka_10_gravidkalender.webp"
    },
    {
        week: 11,
        title: "Vecka 11: [Fyll i titel här]",
        description: "[Fyll i information om vecka 11 här.]",
        image: getImagePath(11)
    },
    {
        week: 12,
        title: "Vecka 12: [Fyll i titel här]",
        description: "[Fyll i information om vecka 12 här. Första trimesterns slut.]",
        image: getImagePath(12)
    },
    {
        week: 13,
        title: "Vecka 13: [Fyll i titel här]",
        description: "[Fyll i information om vecka 13 här. Andra trimestern börjar.]",
        image: getImagePath(13)
    },
    {
        week: 14,
        title: "Vecka 14: [Fyll i titel här]",
        description: "[Fyll i information om vecka 14 här.]",
        image: getImagePath(14)
    },
    {
        week: 15,
        title: "Vecka 15: [Fyll i titel här]",
        description: "[Fyll i information om vecka 15 här.]",
        image: getImagePath(15)
    },
    {
        week: 16,
        title: "Vecka 16: [Fyll i titel här]",
        description: "[Fyll i information om vecka 16 här.]",
        image: getImagePath(16)
    },
    {
        week: 17,
        title: "Vecka 17: [Fyll i titel här]",
        description: "[Fyll i information om vecka 17 här.]",
        image: getImagePath(17)
    },
    {
        week: 18,
        title: "Vecka 18: [Fyll i titel här]",
        description: "[Fyll i information om vecka 18 här. Fosterrörelser kan kännas.]",
        image: getImagePath(18)
    },
    {
        week: 19,
        title: "Vecka 19: [Fyll i titel här]",
        description: "[Fyll i information om vecka 19 här.]",
        image: getImagePath(19)
    },
    {
        week: 20,
        title: "Vecka 20: [Fyll i titel här]",
        description: "[Fyll i information om vecka 20 här. Halvvägs! Ofta rutinultraljud (RUL).]",
        image: getImagePath(20)
    },
    {
        week: 21,
        title: "Vecka 21: [Fyll i titel här]",
        description: "[Fyll i information om vecka 21 här.]",
        image: getImagePath(21)
    },
    {
        week: 22,
        title: "Vecka 22: [Fyll i titel här]",
        description: "[Fyll i information om vecka 22 här.]",
        image: getImagePath(22)
    },
    {
        week: 23,
        title: "Vecka 23: [Fyll i titel här]",
        description: "[Fyll i information om vecka 23 här.]",
        image: getImagePath(23)
    },
    {
        week: 24,
        title: "Vecka 24: [Fyll i titel här]",
        description: "[Fyll i information om vecka 24 här.]",
        image: getImagePath(24)
    },
    {
        week: 25,
        title: "Vecka 25: [Fyll i titel här]",
        description: "[Fyll i information om vecka 25 här.]",
        image: getImagePath(25)
    },
    {
        week: 26,
        title: "Vecka 26: [Fyll i titel här]",
        description: "[Fyll i information om vecka 26 här.]",
        image: getImagePath(26)
    },
    {
        week: 27,
        title: "Vecka 27: [Fyll i titel här]",
        description: "[Fyll i information om vecka 27 här.]",
        image: getImagePath(27)
    },
    {
        week: 28,
        title: "Vecka 28: [Fyll i titel här]",
        description: "[Fyll i information om vecka 28 här. Tredje trimestern börjar.]",
        image: getImagePath(28)
    },
    {
        week: 29,
        title: "Vecka 29: [Fyll i titel här]",
        description: "[Fyll i information om vecka 29 här.]",
        image: getImagePath(29)
    },
    {
        week: 30,
        title: "Vecka 30: [Fyll i titel här]",
        description: "[Fyll i information om vecka 30 här.]",
        image: getImagePath(30)
    },
    {
        week: 31,
        title: "Vecka 31: [Fyll i titel här]",
        description: "[Fyll i information om vecka 31 här.]",
        image: getImagePath(31)
    },
    {
        week: 32,
        title: "Vecka 32: [Fyll i titel här]",
        description: "[Fyll i information om vecka 32 här.]",
        image: getImagePath(32)
    },
    {
        week: 33,
        title: "Vecka 33: [Fyll i titel här]",
        description: "[Fyll i information om vecka 33 här.]",
        image: getImagePath(33)
    },
    {
        week: 34,
        title: "Vecka 34: [Fyll i titel här]",
        description: "[Fyll i information om vecka 34 här.]",
        image: getImagePath(34)
    },
    {
        week: 35,
        title: "Vecka 35: [Fyll i titel här]",
        description: "[Fyll i information om vecka 35 här.]",
        image: getImagePath(35)
    },
    {
        week: 36,
        title: "Vecka 36: [Fyll i titel här]",
        description: "[Fyll i information om vecka 36 här.]",
        image: getImagePath(36)
    },
    {
        week: 37,
        title: "Vecka 37: [Fyll i titel här]",
        description: "[Fyll i information om vecka 37 här. Fostret anses fullgånget.]",
        image: getImagePath(37)
    },
    {
        week: 38,
        title: "Vecka 38: [Fyll i titel här]",
        description: "[Fyll i information om vecka 38 här.]",
        image: getImagePath(38)
    },
    {
        week: 39,
        title: "Vecka 39: [Fyll i titel här]",
        description: "[Fyll i information om vecka 39 här.]",
        image: getImagePath(39)
    },
    {
        week: 40,
        title: "Vecka 40: [Fyll i titel här]",
        description: "[Fyll i information om vecka 40 här. Beräknad födsel.]",
        image: getImagePath(40)
    },
    {
        week: 41,
        title: "Vecka 41: [Fyll i titel här]",
        description: "[Fyll i information om vecka 41 här. Över tiden.]",
        image: getImagePath(41)
    },
    {
        week: 42,
        title: "Vecka 42: [Fyll i titel här]",
        description: "[Fyll i information om vecka 42 här. Maxgräns, igångsättning kan diskuteras.]",
        image: getImagePath(42)
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

    const currentPregnancyWeek = completedWeeks + 1;

    const timeElapsedElement = document.getElementById('time-elapsed');
    let outputString = `${completedWeeks} + ${remainingDays}`;
    if (completedWeeks === 1) outputString = outputString.replace("veckor", "vecka");
    if (remainingDays === 1) outputString = outputString.replace("dagar", "dag");
    timeElapsedElement.textContent = `Vecka ${outputString}`;

    const weekTitleElement = document.getElementById('week-title');
    const weekImageElement = document.getElementById('week-image');
    const weekDescriptionElement = document.getElementById('week-description');

    const weekData = pregnancyInfo.find(info => info.week === currentPregnancyWeek);

    if (startDate > currentDate) {
        weekTitleElement.textContent = "Graviditeten har inte börjat än";
        // Du kan ha en specifik platshållarbild för "väntar"-status
        weekImageElement.src = "images/placeholder_waiting.webp";
        weekImageElement.alt = "Väntar";
        weekDescriptionElement.textContent = "Kom tillbaka när startdatumet har passerats.";
        document.getElementById('current-week-info').style.display = 'none';
    } else {
        document.getElementById('current-week-info').style.display = 'block';
        if (weekData) {
            weekTitleElement.textContent = weekData.title;
            weekImageElement.src = weekData.image; // Använder nu det nya formatet
            weekImageElement.alt = weekData.title;
            weekDescriptionElement.textContent = weekData.description;

            weekImageElement.onerror = function() {
                this.onerror=null;
                this.src='https://via.placeholder.com/400x300.webp?text=Bild+saknas+för+vecka+' + currentPregnancyWeek;
                this.alt = 'Bild saknas för vecka ' + currentPregnancyWeek;
            };

        } else if (currentPregnancyWeek > 0 && pregnancyInfo.length > 0 && currentPregnancyWeek > pregnancyInfo[pregnancyInfo.length -1].week) {
            weekTitleElement.textContent = "Efter beräknad födsel (Vecka " + currentPregnancyWeek + ")";
            // Du kan ha en specifik bild för "efter födsel"
            weekImageElement.src = "images/placeholder_after.webp";
            weekImageElement.alt = "Efter beräknad födsel";
            weekDescriptionElement.textContent = `Graviditeten har passerat vecka ${pregnancyInfo[pregnancyInfo.length -1].week}. Om barnet inte har kommit än, kontakta din barnmorska.`;
            weekImageElement.onerror = function() { this.onerror=null; this.src='https://via.placeholder.com/400x300.webp?text=Grattis%3F'; };
        }
        else {
            weekTitleElement.textContent = `Information för vecka ${currentPregnancyWeek}`;
            weekImageElement.src = 'https://via.placeholder.com/400x300.webp?text=Info+saknas+för+vecka+' + currentPregnancyWeek;
            weekImageElement.alt = `Information saknas för vecka ${currentPregnancyWeek}`;
            weekDescriptionElement.textContent = "Information för denna vecka har inte lagts till ännu i mallen.";
        }
    }
}

// Kör funktionen när sidan har laddats
calculateTimeElapsed();