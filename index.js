import { Client, GatewayIntentBits, MessageFlags } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();  // This loads environment variables from your .env file


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = process.env.TOKEN;

client.on("messageCreate", (message) => {
    // console.log(message.content);
    if (message.author.bot) return;

    message.reply({
        content: "Hi from Bot",
    })
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction.commandName);
    interaction.reply("pong!!");
});

client.login(TOKEN);