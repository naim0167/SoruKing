const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`এই হালারপো, ঠিক কইরা লিখতে পারস নাহ? ${message.author}... আবার চেস্টা করে দেখ ? ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`এমন কিছু অত্র এলাকায় নাই ${message.author}... আবার চেস্টা করে দেখ? ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`আমি ভয়েস চ্যানেল এ ঢুকতে পারতেসি নাহ ${message.author}... আবার চেস্টা করে দেখ ? ❌`);
        }

        await message.channel.send(`খুজতেছি তোর ${res.playlist ? 'প্লেলিস্ট' : 'গান'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};