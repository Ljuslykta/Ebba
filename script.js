// --- *** ÄNDRA DETTA DATUM *** ---
// Ange startdatumet i formatet: 'ÅÅÅÅ-MM-DD'
const startDate = new Date('2023-01-15');
// ---------------------------------

function calculateTimeElapsed() {
    const currentDate = new Date();

    // Nollställ tiden för att bara jämföra datum (ignorerar timmar/minuter/sekunder)
    // Detta gör att räkningen blir mer exakt för hela dagar.
    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const current = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());


    // Skillnad i millisekunder
    const diffMilliseconds = current - start;

    // Omvandla till dagar (1000ms * 60s * 60min * 24h)
    // Använd Math.max för att undvika negativa tal om startdatumet är i framtiden
    const totalDays = Math.max(0, Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24)));

    // Räkna ut hela veckor
    const weeks = Math.floor(totalDays / 7);

    // Räkna ut återstående dagar
    const days = totalDays % 7;

    // Hitta elementet där resultatet ska visas
    const displayElement = document.getElementById('time-elapsed');

    // Skapa texten som ska visas
    let outputString = `${weeks} veckor och ${days} dagar`;

    // (Valfritt - Hantera singular "vecka" och "dag")
    if (weeks === 1) {
        outputString = outputString.replace("veckor", "vecka");
    }
    if (days === 1) {
         outputString = outputString.replace("dagar", "dag");
    }

    // Visa resultatet på sidan
    displayElement.textContent = outputString;
}

// Kör funktionen när sidan har laddats
calculateTimeElapsed();

// (Valfritt: Om du vill att den ska uppdateras automatiskt varje dag utan att ladda om sidan)
// setInterval(calculateTimeElapsed, 1000 * 60 * 60 * 24); // Uppdatera en gång per dygn
// Men för en enkel sida räcker det oftast att den räknar ut vid sidladdning.
