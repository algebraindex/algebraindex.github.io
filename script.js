document.addEventListener("DOMContentLoaded", () => { // Getting JS Ready
    $(document).ready(async () => { // Getting Jquery Ready
        // Log in console...
        let clickdex = 1;
        console.log("JS is ready!")
        console.log("Jquery is ready!")
        // A delay function! 
        async function delay(time){
            const secs = (time) => new Promise(resolve => setTimeout(resolve, ms));
            return secs
        };
        $(".more-welcome").click(async () =>{
            if (clickdex == 1){
                await delay(1000);
                $(".more-welcome").before("<p>Algebraindex includes a Finder (finds specific lessons from units 1 to 6), gives you a breakdown, and finds related Khan Academy lessons.");
                $(".more-welcome").text("Full Page");
                $(".more-welcome").attr("title", "Click to view the full page...")
                clickdex += 1;
            } else if (clickdex == 2){
                window.location.href="https://algebraindex.github.io/about";
            }
        });
    });
});