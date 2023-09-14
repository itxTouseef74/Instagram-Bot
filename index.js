const ig=require('./instagram.js');
(async ()=>{
    await ig.initialize();
    await ig.login('your username','your password')
    await ig.likeTagsProcess(['dance','cars'])
    debugger;
})()