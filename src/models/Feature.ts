export interface FeatureModel {
  _id: string;
  title: string;
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
  }
}
