import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getDomainData = () => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_SH_BACKEND_URL}/dns-data`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Something Went Wrong: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div style={{ marginBottom: '5px' }}>
        <h2>DNS Data</h2>

        {loading && (
          <div className="spinner" style={{ margin: '10px 0' }}></div>
        )}

        {!loading && data && (
          <pre style={{
            textAlign: 'left',
            margin: '20px auto',
            maxWidth: '800px',
            backgroundColor: '#191970',
            borderRadius: '8px',
            overflowX: 'auto',
            maxHeight: '400px',
            fontFamily: 'monospace',
            fontSize: '14px',
            lineHeight: '1.5',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>

      <button 
        onClick={getDomainData}
        disabled={loading}
        style={{
          padding: '10px 20px',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.6 : 1
        }}
      >
        {loading ? 'Loading...' : 'Get Domain Info'}
      </button>
    </>
  )
}

export default App;
