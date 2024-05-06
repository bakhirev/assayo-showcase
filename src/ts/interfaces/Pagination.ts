import ISort from './Sort';

export interface IPagination<TYPE> {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
  sort: ISort[];
  content: TYPE[];
}

export interface IPaginationProps {
  pageNumber: number;
  pageSize: number;
}

export interface IPaginationRequest {
  page?: number;
  size?: number;
}
