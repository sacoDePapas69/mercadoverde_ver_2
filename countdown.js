const getRemainTime = deadline =>{
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime /  (3600 * 24));
            
    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
        }
    };
    
    const countdown = (deadline, elem, finalMessage) => {
        const el = document.getElementById(elem);

        const timeUpdate = setInterval(() => {
            let t = getRemainTime(deadline);
            el.innerHTML = `${t.remainDays}D:${t.remainHours}H:${t.remainMinutes}m:${t.remainSeconds}s`;
            
            if (t.remainTime <= 1){
                clearInterval(timeUpdate);
                el.innerHTML = finalMessage;
            }
        }, 1000)
    };
countdown ('Sat May 28 2022 05:04:46 GMT+0200', 'clock', 'Fin de la oferta');