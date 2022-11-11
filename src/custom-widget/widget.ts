import { FC } from "react";
type GetAssetFunction = (asset: string) => {
  url: string;
  path: string;
  field?: any;
  fileObj: File;
};

interface CmsWidgetControlProps<T = any> {
  value: T;
  field: Map<string, any>;
  onChange: (value: T) => void;
  forID: string;
  classNameWrapper: string;
}

interface CmsWidgetPreviewProps<T = any> {
  value: T;
  field: Map<string, any>;
  metadata: Map<string, any>;
  getAsset: GetAssetFunction;
  entry: Map<string, any>;
  fieldsMetaData: Map<string, any>;
}

interface CmsWidgetParam<T = any> {
  name: string;
  controlComponent: CmsWidgetControlProps<T>;
  previewComponent?: CmsWidgetPreviewProps<T>;
  globalStyles?: any;
}

interface CmsWidget<T = any> {
  control: CmsWidgetControlProps<T>;
  preview?: CmsWidgetPreviewProps<T>;
  globalStyles?: any;
}

export const Widget = (
  name: string,
  controlComponent: FC<any>,
  previewComponent?: FC<any>,
  globalStyles?: any
) => {
  return {
    name,
    controlComponent,
    previewComponent,
    globalStyles,
  };
};
