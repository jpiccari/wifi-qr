import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';

const qrCode = ReactDOM.createRoot(document.getElementById("qr-code"));
const qrInput = document.getElementById("qr-code-value");

function tick() {
    const element = <QRCode
    value={qrInput.value}
    size="800"
    level="H"/>;
    qrCode.render(element);
}

qrInput.oninput = () => tick();

