import { SlashCommandBuilder } from 'discord.js';

const data = new SlashCommandBuilder()
    .setName('create_server')
    .setDescription('Initialize your server');

const execute = async (interaction)  => {
    await interaction.reply('Creating server...');
}

export {
    data,
    execute
}
