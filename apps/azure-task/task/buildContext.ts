import { env } from "@pr/core";
import tl from "azure-pipelines-task-lib";

export const buildContext = {
  repoId:
    tl.getVariable("Build.Repository.ID") ||
    "a187c009-7402-429e-9111-a7791e589bed",
  prId: tl.getVariable("System.PullRequest.PullRequestId") || 46,
  token: tl.getVariable("System.AccessToken") || env.pat,
  orgUrl:
    tl.getVariable("System.CollectionUri") ||
    "https://dev.azure.com/9958703925dad",
} as const;

export type BuildContext = typeof buildContext;
