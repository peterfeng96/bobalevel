export type DefaultContextType = {
  id: string;
  settings: {
    profilePicture: string;
    displayName: string;
    description: string;
    instagram: string;
    tiktok: string;
    youtube: string;
    twitter: string;
    email: string;
  };
  posts: any;
};

export type UserDataType = {
  id: String;
  settings: SettingsType;
  posts: PostType[];
};

export type SettingsType = {
  profilePicture: string;
  displayName: string;
  description: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  twitter: string;
  email: string;
};

export type PostType = {
  id: string;
  section: "Title" | "Link" | "Review";
  data: TitleDataType | LinkDataType | ReviewDataType;
};
export type TitleDataType = {
  title: string;
};
export type LinkDataType = {
  imageUrl: string;
  text: string;
  url: string;
};
export type ReviewDataType = {
  imageUrl: string;
  store: string;
  location: string;
  drink: string;
  toppings: string;
  sugar: string;
  ice: string;
  rating: string;
  review: string;
};
