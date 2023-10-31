$(document).ready(function(){
    console.log('ok')
    // Ici on lit la valeur du h1
    let coucou = $("#coucou").html()
    console.log(coucou)
    // Ici on modifie la valeur de h1
    $("#coucou").html("Jo est méchant avec le formateur")
    // Ici je recupere les li
     console.log($("li"))
    // eq permet d'acceder à l'index d'un tableau d'element jquery
    // chat devient tardigrade
     $("li").eq(1).html('Tardigrade')
     $("li").eq(0).css('color', 'red')
     $("li").css({
        "list-style" : "none" , 
        "font-size" : "2em"
     })
    //  $("#btn").on("click", function(){
    //     $(this).css(
    //         "background-color", "chartreuse"
    //     )
    //  })

     $("p").first().css("color", "blue")
     $("p").last().css("color", "green")


     $(".cacher").each(function() {
        $(this).on("mouseover", hover).on("mouseleave", nohover)
     })

     function hover(){
        $(this).addClass("violet")
        $(this).removeClass("orange")
     }
     function nohover(){
        $(this).addClass("orange")
        $(this).removeClass("violet")
     }

     //dcf593bbb650d9ac7e0358542e70b864976ccd2e34c75ff9cf1e318eeb8e5b3b

     let ctx = $('#chart')
        // moment.locale("fr")

     $('#ajax').on('click', function(){
        $.ajax("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=EUR&limit=60&api_key=dcf593bbb650d9ac7e0358542e70b864976ccd2e34c75ff9cf1e318eeb8e5b3b")
     .done(function(res){
        let data =  res.Data.Data
        console.log(data)

        let time = []
        let valueMaxBtc = []
        let valueMinBtc = []

        data.forEach(Element => {
            time.push(convertTimeStamp(Element.time))
            valueMaxBtc.push(Element.high)
            valueMinBtc.push(Element.low)
        })
        console.log(time)

        new Chart(ctx, {
            type: 'line',
            data: {
              labels: time,
              datasets: [{
                label: 'Value of bitcoin until 2 month',
                data: valueMaxBtc,
                borderWidth: 1
              },{
                label: 'Value of bitcoin until 2 month',
                data: valueMinBtc,
                borderWidth: 1
              }],
              },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
     })
     })
function convertTimeStamp(time){
    let date = new Date(time * 1000)
    let year = date.getFullYear()
    let month =  date.getMonth() < 10 ? "0" + date.getMonth():date.getMonth()
    let day = date.getDay() < 10 ? "0" + date.getDay():date.getDay()
    return `${day}/${month}/${year}`
}
})
