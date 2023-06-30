
Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'

const getCurrentprice= async() =>{
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    const datos = await response.json()
    console.log(datos)
    getChartCurrentprice(datos)
}

getCurrentprice()

const getChartCurrentprice = (datos) =>{
    const chart = document.getElementById('myChart1')

const labes = datos.map((coin) => coin.name)
const Currentprice = datos.map((coin)=> coin.current_price
)

    new Chart(chart, {
        type: 'bar',
        data: {
          labels: labes,
          datasets: [{
            label: 'Precio Actual',
            data: Currentprice,
            borderWidth: 1,
            borderColor: getDataColors(),
               backgroundColor: getDataColors(20)
            
          }]
        },
        options: {
          scales: {
           
            x: {
              grid: {
                offset: true
              }
            }
          }
        }
    });
}

const getBitcoin = async() =>{
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const datos = await response.json()
    console.log(datos)
    getChartBitcoin(datos)
}

getBitcoin()

 const getChartBitcoin = (datos) =>{
     const chart = document.getElementById('myChart2')

     const labes = datos.map((coin) => coin.name)
     const marketCap = datos.map((coin)=> coin.market_cap)

     new Chart(chart, {
         type: 'bar',
         data: {
           labels: labes,
           datasets: [{
             label: 'Valor de Mercado',
             data: marketCap,
             borderWidth: 1,
             borderColor: getDataColors(),
               backgroundColor: getDataColors(20)
           }]
         },
         options: {
           scales: {
             y: {
               beginAtZero: true
             }
           }
         }
     });
 }

 const getPriceChange = async() =>{
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const datos = await response.json()
    console.log(datos)
    getChartPriceChange(datos)
}

getPriceChange()

 const getChartPriceChange = (datos) =>{
     const chart = document.getElementById('myChart3')

     const labes = datos.map((coin) => coin.name)
     const PriceChange = datos.map((coin)=> coin.price_change_percentage_24h)

     new Chart(chart, {
         type: 'bar',
         data: {
           labels: labes,
           datasets: [{
             label: 'Cambio porcentual 24h',
             data: PriceChange,
             borderWidth: 1,
             borderColor: getDataColors(),
               backgroundColor: getDataColors(20)
           }]
         },
         options: {
           scales: {
             y: {
               beginAtZero: true
             }
           }
         }
     });
 }
