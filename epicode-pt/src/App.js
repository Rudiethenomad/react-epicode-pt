import {useState, useEffect} from 'react';


function FetchData() {
  const [records, setRecords] = useState ([])

useEffect(()=>{
  fetch("https://web-series-quotes-api.deta.dev/quote/")
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err))
}, [] )



  return (
    <div >

      <ul>

        {records.map((list, index,)=> (
          <li key ={index}>{list.id} | {list.name}{list.quote}{list.author}</li>
        ))}
      </ul>


        </div>
 
  )
}
  
export default FetchData;
