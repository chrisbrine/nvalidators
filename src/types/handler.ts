import { SanitizerSetter } from "./sanitizers";

export interface HandlerConfig {
  setter?: SanitizerSetter;
  or?: boolean;
}