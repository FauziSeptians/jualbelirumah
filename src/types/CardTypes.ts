export type CardTypes = {
  message: string;
  statusCode: number;
  TotalData: number;
  pages: number;
  additionalData: dataPerumahanType[];
};

export type dataPerumahanType = {
  Id: number;
  Images: {
    Thumbnail: string;
    Data: Array<string>;
  };
  Description: string;
  Title: string;
  Location: string;
  Clicked?: boolean;
  Price: string;
  Details: {
    Tipe: string;
    Transaksi: string;
    AreaBuilding: string;
    AreaSurface: string;
    Bathroom: string;
    Bedroom: string;
    Electricity: string;
  };
  Agent: {
    Name: string;
    Role: string;
    MessageNo: string;
    CallNo: string;
    Picture: string;
  };
};

export type CardPopularTypes = {
  Images: string;
  Title: string;
  Location: string;
  Harga: number;
  Description: string;
};

export type MiniCardPopularTypes = {
  Images: string;
  Title: string;
  Location: string;
};
