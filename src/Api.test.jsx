import { afterEach, beforeEach, describe, it, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Api from "./Api";

describe("Api Component", () => {
  let fetchSpy;

  beforeEach(() => {
    fetchSpy = vi.spyOn(global, "fetch");
  });

it("calls fetch with correct URL", async () => {
   fetchSpy.mockResolvedValueOnce ({
    ok: true,
    json: async() => ({input: "city"})
   })

   render (<Api/>)

   fireEvent.change(screen.getByPlaceholderText("Search Your City"), {target:{value: "city"}})
   fireEvent.click(screen.getByText("Search"))
})
});