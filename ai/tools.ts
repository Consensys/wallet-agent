import { tool as createTool } from "ai";
import { z } from "zod";

const tool = createTool({
  description: "Example tool",
  parameters: z.object({
    name: z.string().describe("The name of the user"),
  }),
  execute: async ({ name }) => {
    return { name };
  },
});

export const tools = {
  example: tool,
};
