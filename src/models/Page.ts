import { FeatureModel } from "./Feature";

export interface PageModel {
  title: string;
  subtitle: string;
  heroImage: {
    url: string;
  }
  heroBackground: {
    url: string;
  }
  featureBackground: {
    url: string;
  }
  featuresCollection: FeatureModel[];
}
