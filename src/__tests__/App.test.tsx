import ReactThreeTestRenderer from "@react-three/test-renderer";
import App from "../App";

describe("CadConverter", () => {
  it("should render successfully", async () => {
    const renderer = await ReactThreeTestRenderer.create(<App />);
    const renderedTree = renderer.toTree();
    expect(renderedTree).toBeTruthy();
  });
});
