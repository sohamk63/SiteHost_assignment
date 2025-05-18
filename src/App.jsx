import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [data, setData] = useState()

  const getDomainData = () => {
    axios.get(`${process.env.SH_BACKEND_URL}/dns-data`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) =>{
      console.error("Something Went Wrong: ", error);
    })
  }
  
  return (
    <>

      <div style={{
        marginBottom : '5px'
      }}>
        <h2>DNS Data</h2>
        <div >

        <pre
          style={{
            textAlign: 'left',
            // padding: '20px',
            margin: '20px auto',
            maxWidth: '800px',
            backgroundColor: '#191970',
            borderRadius: '8px',
            overflowX: 'auto',
            overflowX: 'auto',
            maxHeight:'400px',
            fontFamily: 'monospace',
            fontSize: '14px',
            lineHeight: '1.5',
            whiteSpace: 'pre-wrap',  
            wordBreak: 'break-word' 
          }}
        >
        {JSON.stringify(data, null, 2)}
      </pre>

      
      </div>
      </div>
      <button 
      onClick={getDomainData}
      >
        Get Domain Info
      </button>    
    </>
  )
}

export default App
