import ReactThreeTestRenderer from "@react-three/test-renderer";
import ViewOne from "../components/ViewOne";
import ViewTwo from "../components/ViewTwo";

describe("ViewOne", () => {
  it("should render successfully", async () => {
    const renderer = await ReactThreeTestRenderer.create(<ViewOne />);
    const renderedTree = renderer.toTree();
    expect(renderedTree).toBeTruthy();
  });
});

describe("ViewTwo", () => {
  it("should render successfully", async () => {
    const renderer = await ReactThreeTestRenderer.create(<ViewTwo />);
    const renderedTree = renderer.toTree();
    expect(renderedTree).toBeTruthy();
  });
});
