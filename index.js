const wt = require('./whatsapp');

(async()=>{
    await wt.initialize();
    await wt.message('Sindhuja Scl','Hlooo');
})()