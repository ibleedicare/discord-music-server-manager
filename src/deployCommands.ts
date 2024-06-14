import { REST, Routes } from 'discord.js';
import { Command } from './types/command.ts';

export async function deployCommands(commands: Command[]) {
    const TOKEN = process.env.DISCORD_TOKEN;
    const CLIENT_ID = process.env.DISCORD_CLIENT_ID;

    const rest = new REST({ version: '10' }).setToken(TOKEN);
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(CLIENT_ID), {body: commands});
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
};
