const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // İhtiyaca göre API'ler ekleyebilirsiniz
});