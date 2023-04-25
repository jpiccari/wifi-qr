import React from 'react';
import {createRoot} from 'react-dom/client';
import QRCode from 'react-qr-code';
import debounce from 'lodash.debounce';

const MAX_LENGTH = 8192;
const qrCode = createRoot(document.getElementById("qr-code"));
const qrInput = document.getElementById("qr-code-value");

const tick = debounce(() => {
    console.log('hi')
    const value = qrInput.value;
    if (value.length > MAX_LENGTH) {
        alert("Value to long...");
        qrInput.value = qrInput.value.substr(0, MAX_LENGTH);
        return;
    }

    const element = <QRCode
    value={qrInput.value}
    size="100%"
    level="H"/>;
    qrCode.render(element);
}, 200, {maxWait: 2000});

qrInput.oninput = tick;

tick();