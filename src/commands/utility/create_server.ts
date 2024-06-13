import { SlashCommandBuilder } from 'discord.js';

const createServerCommand: Command = {
    data: new SlashCommandBuilder()
        .setName('create_server')
        .setDescription('Initialize your server'),
    execute: async (interaction) => {
        await interaction.reply('Creating server...');
    }
};

export default createServerCommand;
