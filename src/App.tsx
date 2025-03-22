import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

export default function App() {
  const [qrInputData, setQrInputData] = useState("");
  const [showQR, setShowOR] = useState(false);
  const [qrText, setQrText] = useState("");

  const handleChange = (evt: any) => {
    setQrInputData(evt.target.value);
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    setShowOR(true);
    setQrText(qrInputData);
    setQrInputData("");
  };

  return (
    <>
      <main className="rootContainer">
        <h1 className="title">QR Code Generator</h1>
        <form onSubmit={handleSubmit} className="formInput">
          <input
            type="text"
            name="qrInput"
            id="qrInput"
            value={qrInputData}
            onChange={handleChange}
            className="inputUserText"
          />
          <button className="btnGenerate">Generate</button>
        </form>
        {showQR && <QRCode value={qrText} />}
      </main>
    </>
  );
};