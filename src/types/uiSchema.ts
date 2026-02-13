export interface UISchema {
  type: string;
  props?: Record<string, any>;
  children?: UISchema[];
}
