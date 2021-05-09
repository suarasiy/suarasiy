export type ImagesType = {
  title: string;
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
  images: ImagesType[] | null;
}
