import { describe, it, expect } from "vitest";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import ViewOne from "../components/ViewOne";
import ViewTwo from "../components/ViewTwo";

describe("ViewOne", () => {
  it("should render successfully", async () => {
    const renderer = await ReactThreeTestRenderer.create(<ViewOne />);
    const instance = renderer.getInstance();
    expect(instance).toBeTruthy();
  });
});

describe("ViewTwo", () => {
  it("should render successfully", async () => {
    const renderer = await ReactThreeTestRenderer.create(<ViewTwo />);
    const instance = renderer.getInstance();
    expect(instance).toBeTruthy();
  });
});
