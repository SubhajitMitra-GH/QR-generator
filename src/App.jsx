import { useState } from 'react'
import QRCode from 'react-qr-code';
import './App.css'

function App() {
  let qr=document.getElementsByClassName(".qrcode");
  const [input, setInput] = useState("");
  const [qrCode,setQrCode] = useState("");
  const [qrStyle,setQrStyle] = useState({display:'none'})

  function generateQR(){
    setQrCode(input)
    setInput('')
    setQrStyle({display:'block'})
     
  }

  return (
    <>
    
    <div className='container'>
    <div className='input-box'>
      <input type='text' className='text-box' onChange={(e)=>{setInput(e.target.value)}} placeholder='Enter the text' />
      <button className='btn' disabled={input && input.trim()!==""?false:true} onClick={generateQR}>Generate</button>
    </div>
    <div className='sty' style={qrStyle}>
    <div className='qrcode' style={{ background: 'white', padding: '60px',margin:'20px' }}><QRCode id ="qr-code-value" value={qrCode} size={300} bgcolor="#fff" />
    </div>
    </div>
    </div>
    </>
  )
}

export default App
