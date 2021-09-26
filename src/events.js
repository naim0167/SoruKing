player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

// player.on('trackStart', (queue, track) => {
//     queue.metadata.send(`Started playing ${track.title} in **${queue.connection.channel.name}** 🎧`);
// });

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`${track.title} এই সঙ্গীতখানা কিউতে ঢুকায় দেওয়া হইল ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('কেডা জানি আমারে মাইরা বাইর করে দিসে 😭, লিস্ট ফাকা চকচকা... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('আমারে একলা রাইখা সব জানি কই গেসে, যাইগা আমিও... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('লিস্টের সকল সঙ্গীত শেষ, শেখ হাসিনার বাংলাদেশ 🇧🇩');
});