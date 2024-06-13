import { expect, it, describe, jest } from "bun:test";
import createServerCommand from "@/commands/utility/create_server.ts";

describe("create server", async () => {
    it('Should have correct name and description', async () => {
        expect(createServerCommand.data.name).toBe("create_server");
        expect(createServerCommand.data.description).toBe("Initialize your server");
    })

    it('Should reply with "Creating server..." when executed', async () => {
        
        const mockInteraction = {
            reply: jest.fn()
        }

        await createServerCommand.execute(mockInteraction);

        expect(mockInteraction.reply).toBeCalledWith("Creating server...");
    })
})
