document.addEventListener("DOMContentLoaded", () => { // Getting JS Ready
    $(document).ready(async () => { // Getting Jquery Ready
        // Log in console...
        console.log("JS is ready!")
        console.log("Jquery is ready!")
        // A delay function! 
        function delay(time){
            const delay = (time) => new Promise(resolve => setTimeout(resolve, ms));
            return delay
        }
    });
});