import { FeatureModel } from "./Feature";

export interface PageModel {
  title: string;
  subtitle: string;
  heroImage: {
    url: string;
  }
  heroBackground: {
    url: string;
    width: number;
    height: number;
  }
  inputLabel: string;
  buttonCopy: string;
  featureBackground: {
    url: string;
  }
  featuresCollection: FeatureModel[];
}
