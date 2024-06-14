import { expect, describe, it, jest, mock } from "bun:test";
import { deployCommands } from "@/deployCommands.ts";
import { Routes } from "discord.js";
import { Command } from "../types/command.ts";
import { SlashCommandBuilder } from "discord.js";

const mockSetToken = jest.fn();
const mockRest = jest.fn();
const mockPut = jest.fn();

mock.module("discord.js", () => {
    return {
        REST: mockRest.mockImplementation(() => {
            return {
                setToken: mockSetToken.mockReturnThis(),
                put: mockPut
            }
        }),
    }
})

describe("deployCommands", () => {
  it("should deploy the commands", async () => {
    process.env.DISCORD_TOKEN = "token";
    process.env.DISCORD_CLIENT_ID = "1234";
    const commands: Command[] = [];
    const testSlashCommand = new SlashCommandBuilder()
        .setName('test')
        .setDescription('test');
    commands.push(testSlashCommand.toJSON());
    await deployCommands(commands);

    expect(mockRest).toBeCalledWith({ version: "10" });
    expect(mockSetToken).toBeCalledWith("token");
    expect(mockPut).toBeCalledWith(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), {body: commands});
  });
});
