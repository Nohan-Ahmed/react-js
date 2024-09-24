import './App.css'
import Card from './components/Card'

function App() {
  const products = [{
    'title': 'Macbook Air M1',
    "price": '$999'
  },
  {
    'title': 'Infinix GT book',
    "price": '$999'
  },
  {
    'title': 'Razer blende 14',
    "price": '$26999'
  },
  {
    'title': 'Asus Rog strix',
    "price": '$1299'
  },]
  return (
    <div className="container mx-5 pt-10 flex gap-3">
      <Card title={products[0].title} price={products[0].price} />
      <Card title={products[1].title} price={products[1].price} />
      <Card title={products[2].title} price={products[2].price} />
    </div >
  )
}

export default App
