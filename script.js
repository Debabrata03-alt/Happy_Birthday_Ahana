// Wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Find the button and the screen
    const finaleButton = document.getElementById('finale-button');
    const finaleScreen = document.getElementById('finale-screen');

    // Make sure we found them (for the finale.html page)
    if (finaleButton && finaleScreen) {
        
        // Add a click listener to the button
        finaleButton.addEventListener('click', () => {
            
            // 1. Hide the button
            finaleButton.style.display = 'none';

            // 2. Add the 'show' class to the pink screen to start its animation
            finaleScreen.classList.add('show');

            // 3. Trigger the "blasting" animations
            
            // A burst of "balloons" (round confetti)
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                shape: 'circle'
            });

            // A blast of "candles" (long confetti)
            // We use 'ticks' to make them long
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                ticks: 200 // 'ticks' makes them long
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                ticks: 200
            });

            // Keep the confetti going for a bit
            setTimeout(startCelebration, 500);
            setTimeout(startCelebration, 1000);
        });
    }
});

// Function to keep the celebration going
function startCelebration() {
    confetti({
        particleCount: 70,
        startVelocity: 30,
        spread: 360,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2 // from the top
        }
    });
}