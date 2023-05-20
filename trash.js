import {useState, useEffect} from 'react';
//import './App.css';

function App() {

const [loading, setLoading] = useState(true);
const [records, setRecods] = useState([]);


  useEffect(() => {
   setLoading(true);
    fetch("https://web-series-quotes-api.deta.dev/quote/")
      .then(response => response.json())
      .then(data => setRecods(data))
      
      .catch(error => console.error(error));
     setLoading(false);




  }, []);




  return (
    <div className="App">

      {loading ? "loading..." : (
        <div className="grid">
          {records && records.map(item => (
            <div className ="item" key={item.id}>
              <p>{item.title}</p>
        
        </div>
      ))}
      </div>
      
          )}
</div>
  );
          }
export default App;


<div >

<ul>

  {records.map((list, index)=> (
    <li key ={index}>{list.id} | {list.name}{list.text}</li>
  ))}
</ul>


  </div>

