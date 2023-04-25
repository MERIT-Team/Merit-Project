export class CreateHotelDto {
  name: string;
  price: number;
  rating: number;
  wifi: boolean;
  parking: boolean;
  location: {
    address: string;
    coordinates: number[];
  };
  userRating: number;
  images: string[];
  thingsToKnow: {
    houseRules: string[];
  };
  comments: string;
}
