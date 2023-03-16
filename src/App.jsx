import './App.css'

function App(){
  return(
    <div className="App">
      <Phone/>
    </div>
  )
}


function Phone() {

 const data =  [
    {
      "model": "OnePlus 9 5G",
      "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
      "company": "Oneplus"
    },
    {
      "model": "Iphone 13 mini",
      "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
      "company": "Apple"
    },
    {
      "model": "Samsung s21 ultra",
      "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
      "company": "Samsung"
    },
    {
      "model": "Xiomi mi 11",
      "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
      "company": "Xiomi"
    },
    {
      "model": "OnePlus 9 5G",
      "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
      "company": "Oneplus"
    },
    {
      "model": "Iphone 13 mini",
      "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
      "company": "Apple"
    },
    {
      "model": "Samsung s21 ultra",
      "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
      "company": "Samsung"
    },
    {
      "model": "Xiomi mi 11",
      "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
      "company": "Xiomi"
    },
    {
      "model": "Samsung s21 ultra",
      "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
      "company": "Samsung"
    },
  ]

  return (

    <div className="phone-list-container">
       {data.map((mv,index)=> <Comp key={index} model={mv.model} image={mv.img} company={mv.company} />)}
    </div>
  )
}


function Comp({model,image,company}){
  return(
    <div className="phone-container">
      <img className='phone-picture' src={image} alt={model} />
      <h2 className='phone-name'>{model}</h2>
      <p className='phone-company'>{company}</p>
    </div>
  )
}


export default App
