function countDown(timesecond) {
    // quy doi ra ngay gio phut giay
    // 1d = 86400s, 1h = 3600s, m = 60s, 1s = 1s
    let day = Math.floor(timesecond / 86400);  //Mathfloor lay so ngay nguyen, phan du duoc chuyen xuong duoi de doi sang gio
    let hour = Math.floor(timesecond % 86400 / 3600);//Mathfloor lay so gio nguyen, phan du duoc chuyen xuong duoi de doi sang phut
    let min = Math.floor(timesecond % 86400 % 3600 / 60);//Mathfloor lay so phut nguyen, phan du duoc chuyen xuong duoi de doi sang giay
    let second = timesecond % 86400 % 3600 % 60; // so giay con la

    return {
        "day": day,
        "hour": hour,
        "min": min,
        'second': second
    }

}
// console.log(countDown(86500))

let dayhtml = document.querySelector(".day h2");
let hourhtml = document.querySelector(".hour h2");
let minhtml = document.querySelector(".min h2");
let secondhtml = document.querySelector(".second h2");
let button = document.querySelector("button");

button.addEventListener("click", function () {
    let time = 86410; // ta chi dinh thoi gian cứng, ta cũng có thể chỉ định thời gian cho người dùng nhập vào từ ô input hay đại loại vậy

    setInterval(function () { /* ở đây hiện tại đang hiểu là closure. biến time trong hàm
    setInterval sẽ chỉ mượn biến time bên ngoài = 8600 một lần duy nhất, sau đó khi trong hàm setInterval chạy những lần sau
    thì nó có biến time của riêng nó và ưu tiên dùng biến time đó
    
    */
        time = time - 1
        console.log(time)
        dayhtml.innerHTML = countDown(time).day
        hourhtml.innerHTML = countDown(time).hour
        minhtml.innerHTML = countDown(time).min
        secondhtml.innerHTML = countDown(time).second

    }, 1000)


}

)

