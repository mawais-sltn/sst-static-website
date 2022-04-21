import { Template } from "aws-cdk-lib/assertions";
import * as sst from "@serverless-stack/resources";
import BackendStack from "../stacks/BackendStack";

test("Test BackendStack", () => {
  const app = new sst.App();
  // WHEN
  const stack = new BackendStack(app, "test-stack");
  // THEN
  const template = Template.fromStack(stack);
  template.resourceCountIs("AWS::Lambda::Function", 1);
});
