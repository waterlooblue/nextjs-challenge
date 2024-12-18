import { Feature } from "./Feature";

export interface Page {
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
  featuresCollection: Feature[]
}
