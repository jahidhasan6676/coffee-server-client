
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const coffeeData = useLoaderData();
  const [coffees, setCoffee] = useState(coffeeData);



  return (
    <div className='w-10/12 mx-auto'>
      <Header></Header>
      
      <h1 className='text-2xl font-semibold text-center mt-20'>Our Popular Products {coffeeData.length}</h1>
      <Link to="/addCoffee" className="btn">Add Coffee</Link>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          coffees?.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffee={setCoffee} coffee={coffee}></CoffeeCard>)
        }
      </div>
      
      
    </div>
  )
}

export default App
