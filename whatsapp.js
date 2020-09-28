const puppeteer = require('puppeteer');

const url = 'https://web.whatsapp.com/'

const whatsapp = {
    browser : null,
    page : null,

    initialize: async()=>{
        whatsapp.browser = await puppeteer.launch({headless : false});
        whatsapp.page = await whatsapp.browser.newPage();
    },

    message : async(contact,msg)=>{
        await whatsapp.page.goto(url,{waitUntiil:"networkidle2"});

        await whatsapp.page.waitFor(10000);
        await whatsapp.page.type('div[contenteditable="true"]',contact,{delay:50});
        //'div[aria-selected="false"]'
        await whatsapp.page.click(`div [title="${contact}"]`);
        //'div[spellcheck="true"]'
        for(let i=0;i<30;i++){
        await whatsapp.page.type('div[spellcheck="true"]',msg,{delay:50});
        //'span[data-testid="send"]'
        await whatsapp.page.click('span[data-testid="send"]');
        }
    }
}
module.exports = whatsapp;