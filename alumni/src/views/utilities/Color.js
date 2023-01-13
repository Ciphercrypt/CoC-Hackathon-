// const QRCode = require('qrcode')
// // import QRCode from 'qrcode';
 
// // Creating the data
// let data = {
//     name:"Employee Name",
//     age:27,
//     department:"Police",
//     id:"aisuoiqu3234738jdhf100223"
// }
 
// // Converting the data into String format
// let stringdata = JSON.stringify(data)
 
// // Print the QR code to terminal
// QRCode.toString(stringdata,{type:'terminal'},
//                     function (err, QRcode) {
 
//     if(err) return console.log("error occurred")
 
//     // Printing the generated code
//     console.log(QRcode)
// })
   
// // Converting the data into base64
// QRCode.toDataURL(stringdata, function (err, code) {
//     if(err) return console.log("error occurred")
 
//     // Printing the code
//     console.log(code)
// })

import QRCode from 'qrcode'
import { TextField, Button } from '@mui/material'
import { useState } from 'react'

function UIColor() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
        console.log("CALLED", qr)
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<h1 sx={{paddingBottom: '10px'}}>QR Generator</h1>
            <TextField
            id="standard-basic"
            label="Enter Tap ID"
            value={url}
            variant='standard'
            sx={{paddingRight:'10px'}}
            onChange={e => setUrl(e.target.value)}
            />
            <Button variant="contained" sx={{paddingTop:'10px', marginTop:'5px'}} onClick={GenerateQRCode}>Generate</Button>
            <br/>
            <br/>
            <br/>
            {qr && <>
				<div>
                    <img src={qr} width="200px"/>
                </div>
                <br/>
            <br/>
				<a href={qr} download="qrcode.png">Download</a>
			</>}
            <br/>
            
            

		</div>
	)
}

// export default QRCodeGenerator;
export default UIColor;
