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
    const days = document.querySelector(".days");
    function currentDay(){
        let date = new Date();
        let day = date.getDate();
        days.innerHTML=day
    }
    currentDay()
}
{
    const month = document.querySelector(".month");
    function currentDay(){
        let date = new Date();
        let months = date.getMonth();
        switch(months){
                case 0 :
                    month.innerHTML="Yanvar"
                    break
                case 1 :
                    month.innerHTML="Fevral"
                    break
                case 2 :
                    month.innerHTML="Mart"
                    break
                case 3 :
                    month.innerHTML="Aprel"
                    break
                case 4 :
                    month.innerHTML="May"
                    break
                case 5 :
                    month.innerHTML="Iyun"
                    break
                case 6 :
                    month.innerHTML="Iyul"
                    break
                case 7 :
                    month.innerHTML="Avgust"
                    break
                case 8 :
                    month.innerHTML="Sentyabr"
                    break
                case 9 :
                    month.innerHTML="Oktyabr"
                    break
                case 10 :
                    month.innerHTML="Noyabr"
                    break
                case 11 :
                    month.innerHTML="Dekabr"
                    break
                    default:
        }
    }
    currentDay()
    

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