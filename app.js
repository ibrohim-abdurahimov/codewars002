{
    const day = document.querySelector(".day");
    function currentDay(){
        let date = new Date();
        let days = date.getDay();
        switch(days){
                case 1 :
                    day.innerHTML="Dushanba"
                    break
                case 2 :
                    day.innerHTML="Seshanba"
                    break
                case 3 :
                    day.innerHTML="Chorshanba"
                    break
                case 4 :
                    day.innerHTML="Payshanba"
                    break
                case 5 :
                    day.innerHTML="Juma"
                    break
                case 6 :
                    day.innerHTML="Shanba"
                    break
                case 7 :
                    day.innerHTML="Yakshanba"
                    break
                    default:
        }
    }
    currentDay()
     
}
{
    const time = document.querySelector(".time");
    function currentTime(){
        let date = new Date();
        let hour = date.getHours().toString().padStart(2, "0")
        let minute = date.getMinutes().toString().padStart(2, "0")
        let seconde = date.getSeconds().toString().padStart(2, "0")
        time.innerHTML=`${hour}:${minute}:${seconde}`
    }
    currentTime()
    setInterval(()=>{
        currentTime()
    }, 1000)
}
{
    // console.log("Masala-1")
    // function repeatStr (n, s) {
    //     return s.repeat(n)
    // }
    // console.log(repeatStr(3,"I"))
}
{
    // console.log("Masala-2")
    // function removeChar(str){
    //     return str.slice(1,-1)
       
    // }
    // console.log(removeChar("Hello"))
}
{
    // console.log("Masala-3")
    // function makeUpperCase(str) {
    //     return str.toUpperCase()
    // }
    // console.log(makeUpperCase("salom"))
}