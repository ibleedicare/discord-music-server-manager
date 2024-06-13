import { deployCommands } from './deployCommands';

const commands: Command[] = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];
deployCommands(commands);
