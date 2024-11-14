import './App.css';
import Players from './components/Players';

function App() {
  return (
    <div className="App">

      <div className='playerDiv'>
      <img src='./images/virat kohli.webp' alt=''></img> 
      <h2>Name:Virat Kohli</h2>
      <h3>Team:RCB</h3>
      <h3>Role: Batsman </h3>
      </div> 

      <div className='playerDiv'>
      <img src='./images/rohit-sharma.png' alt=''></img>
      <h2>Name:Rohit Sharma</h2>
      <h3>Team:MI</h3>
      <h3>Role: Batsman (Captain)</h3>
      </div> 

      <div className='playerDiv'>
      <img src='./images/dhoni.webp' alt=''></img>
      <h2>Name:Dhoni</h2>
      <h3>Team:CSK</h3>
      <h3>Role: Batsman (Captain)</h3>
      </div> 
      
    <Players name="dhoni" team="CSK" role="Batsman" pic="./images/dhoni.webp"></Players>
    <Players name="rohit" team="MI" role="Batsman" pic="./images/rohit-sharma.png"></Players>
    <Players name="virat" team="RCB" role="Batsman" pic="./images/virat kohli.webp"></Players>
    


    </div>
  );
}

export default App;
