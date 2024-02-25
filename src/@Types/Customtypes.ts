export declare interface APIResponse {
  nonprofits: Nonprofit[];
  pagination: any;
}

export declare type Nonprofit = {
  description: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl: string;
  coverImageUrl: string;
  logoCloudinaryId: string;
  location: string;
  websiteUrl?: string;
};

export declare type PaginationType = {
  page: number;
  pages: number;
  page_size: number;
  total_results: number;
};




export declare interface CharityDetailsType {
  id: string
  name: string
  isDisbursable: boolean
  locationAddress: string
  locationLatLng: LocationLatLng
  ein: string
  description: string
  descriptionLong: string
  primarySlug: string
  logoCloudinaryId: string
  coverImageCloudinaryId: string
  nteeCode: string
  nteeCodeMeaning: NteeCodeMeaning
  hasAdmin: boolean
  directDisbursement: boolean
  websiteUrl: string
  metadata: Metadata
  logoUrl: string
  coverImageUrl: string
  profileUrl: string
}

export declare interface LocationLatLng {
  type: string
  coordinates: number[]
}

export declare interface NteeCodeMeaning {
  majorCode: string
  majorMeaning: string
  decileCode: string
  decileMeaning: string
  centileCode: string
  centileMeaning: string
}

export interface Metadata {}
