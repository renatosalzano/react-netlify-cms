/* eslint-disable react-hooks/exhaustive-deps */
import CMS from "netlify-cms-app";
import { config } from "./config";
import { useEffect } from "react";
import { TestWidget } from "../custom-widget/test-widget";

export const useCMS = (widgets = []) => {
  useEffect(() => {
    try {
      CMS.init({ config });

      // REGISTER CUSTOM WIDGET
      CMS.registerWidget(TestWidget);
    } catch (error) {
      console.error(error);
    }
  }, []);
};
