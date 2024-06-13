import { expect, it, describe, jest } from "bun:test";
import { data, execute } from "../../../commands/utility/create_server.ts";

describe("create server", async () => {
    it('Should have correct name and description', async () => {
        expect(data.name).toBe("create_server");
        expect(data.description).toBe("Initialize your server");
    })

    it('Should reply with "Creating server..." when executed', async () => {
        
        const mockInteraction = {
            reply: jest.fn()
        }

        await execute(mockInteraction);

        expect(mockInteraction.reply).toBeCalledWith("Creating server...");
    })
})
