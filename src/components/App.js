import { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  // console.log('App Component', sushi)
  const [sushi, setSushi] = useState([])
  const [index, setIndex] = useState(0) // index for sushi
  const [wallet, setWallet] = useState(82)
  

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      const updatedSushis = sushis.map((sushi) => {
        return { ...sushi, eaten: false }
      })
        setSushi(updatedSushis)
      })
     
  },[])

  // only displays first four sushi
  const displaySushis = sushi.slice(index, index + 4)
  
  // when More Sushi! button is clicked it adds 4
  function moreSushi() {
    setIndex(index + 4)
  }

  // filters out sushi that has been devoured 
  const eatingSushi = sushi.filter(sushi => sushi.eaten)

  // takes $ away from wallet based on sushi price
  function handleEatingSushi(sushi) {
    if (wallet >= sushi.price) {
      sushi.eaten = true
      setWallet(wallet - sushi.price)
    } else {
      alert('Not enough $$$')
    }
  }

  
  
  return (
    <div className="app">
      <SushiContainer 
        sushis={displaySushis} 
        moreSushi={moreSushi}
        handleEatingSushi={handleEatingSushi}
      />
      <Table wallet={wallet} plates={eatingSushi} />
    </div>
  )
}

export default App;
