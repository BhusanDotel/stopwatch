function Count() {
    document.querySelector(".js-start").disabled=true;
    let millisecond = 0;
    let second = 0;
    let minute = 0;
    let hour = 0;
    let s_prefix = 0;
    let m_prefix= 0;
    let h_prefix=0;
    let intervalId;

    function displayNumber() {
        millisecond += 13;

        //this is to check, if  nnumber is double digit or not, if yes, put prefix "0" to make time double digit else make prefix empty.
        const sec_string = String(Math.abs(second));
        sec_string.length>1? s_prefix="" : s_prefix=0;

        const min_string = String(Math.abs(minute));
        min_string.length>1? m_prefix="" : m_prefix=0;

        const hour_string = String(Math.abs(hour));
        hour_string.length>1? h_prefix="" : h_prefix=0;


        if (millisecond >= 1000) {
            second += 1;
            millisecond = 0;
        }

        if (second >= 60) {
            minute += 1;
            second = 0;
        }

        if (minute >= 60) {
            hour = 1;
            minute = 0;
        }

        const hour_div = document.querySelector(".hour");
        const minute_div = document.querySelector(".minute");
        const second_div = document.querySelector(".second");
        const millisecond_div = document.querySelector(".millisecond");

        hour_div.innerHTML=`${h_prefix}${hour}`;
        minute_div.innerHTML=`${m_prefix}${minute}`;
        second_div.innerHTML=`${s_prefix}${second}`;
        millisecond_div.innerHTML=millisecond;
    }

    displayNumber();
    intervalId = setInterval(displayNumber, 13);

    const reset_button = document.querySelector(".js-reset");
    reset_button.addEventListener('click', () => {
        hour = minute = second = millisecond = 0;
    });

    const pause_button = document.querySelector(".js-pause");
    pause_button.addEventListener('click', () => {
        if (pause_button.textContent === "Pause!") {
            clearInterval(intervalId);
            pause_button.textContent = "Resume!";

            const reset_button = document.querySelector(".js-reset");
            reset_button.addEventListener('click', () => {

                document.querySelector(".hour").textContent='00';
                document.querySelector(".minute").textContent='00';
                document.querySelector(".second").textContent='00';
                document.querySelector(".millisecond").textContent='000';
                
            });

        } else {
            intervalId = setInterval(displayNumber, 13);
            pause_button.textContent = "Pause!";
        }
    });
}

document.querySelector(".js-start").addEventListener('click',()=>{
    Count();
})
