export declare interface APIResponse {
  nonprofits: Nonprofit[];
  pagination: Pagination;
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
