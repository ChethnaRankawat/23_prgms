/*Question 2: Program to log the system uptime in a user-friendly format (days,
    hours, minutes).*/
    

    const os = require('os');

    function time(){
       
        setInterval(() => {
            const t = os.uptime();
    
           
            const days = Math.floor(t / (24 * 3600));
            const hours = Math.floor((t % (24 * 3600)) / 3600);
            const minutes = Math.floor((t % 3600) / 60);
    
       
            console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes`);
        });
    }
    
    
    time();