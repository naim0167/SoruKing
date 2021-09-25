player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`শুরু হইয়া গেসে, গান শোন - ${track.title} 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`${track.title} - এই সঙ্গীতখানা লিস্টে ঢুকায় দেওয়া হইল ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('আমারে মাইরা বাইর করে দিসে কেডা জানি 😭, লিস্ট ফাকা কইরা দিলাম... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('আমারে একলা রাইখা সব জানি কই উদাও হইয়া গেসে , যাইগা আমিও... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('লিস্টের সব সঙ্গীত শেষ, শেখ হাসিনার বাংলাদেশ ✅');
});