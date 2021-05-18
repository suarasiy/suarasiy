export type ImagesType = {
  title: string;
  light: string;
  url: string;
};

export interface ProfileProps {
  fullName: string;
  age: number;
  location: string;
  passion: string;
  level: string | number;
  bio: string;
  liked: string | null;
  photo: string;
  images: ImagesType[] | null;
}
