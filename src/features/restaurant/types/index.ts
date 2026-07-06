/**=============
 * Shared
 ===============*/

export type Menu = {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
};

export type Coordinates = {
  lat: number;
  long: number;
};

export type ReviewUser = {
  id: number;
  name: string;
  avatar: string | null;
};

export type Review = {
  id: number;
  star: number;
  comment: string | null;
  createdAt: string;
  user: ReviewUser;
};

/**=============
 * Recommended
 ===============*/

export type RecommendedRestaurant = {
  id: number;
  name: string;
  star: number;
  place: string;
  lat: number;
  long: number;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  sampleMenus: Menu[];
  isFrequentlyOrdered: boolean;
  distance: number;
};

export type RecommendedRestaurantData = {
  recommendations: RecommendedRestaurant[];
  message: string;
};

/**=============
 * Detail
 ===============*/

export type RestaurantDetail = {
  id: number;
  name: string;
  star: number;
  averageRating: number;
  place: string;
  coordinates: Coordinates;
  logo: string;
  images: string[];
  category: string;
  totalMenus: number;
  totalReviews: number;
  menus: Menu[];
  reviews: Review[];
};
