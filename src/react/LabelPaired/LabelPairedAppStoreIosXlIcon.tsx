import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreIosXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.75 7.5q.937.047 1.594.656.61.657.656 1.594v16.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656H2.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 26.25V9.75q.047-.937.656-1.594A2.45 2.45 0 0 1 2.25 7.5zM5.953 24.047l.89-1.594q-.702-.89-1.827-.515l-.703 1.171q-.33.75.375 1.266.75.329 1.265-.328m6.516-2.531q.281-.657-.047-1.266-.282-.562-1.031-.61H8.484l4.032-6.984q.375-.797-.328-1.265-.798-.375-1.313.328l-.422.703-.375-.703q-.516-.703-1.312-.328-.704.468-.328 1.265l.937 1.64-3.047 5.345h-2.39q-.845.046-.938.937.094.844.938.938zm4.594 0q.844-.094.937-.938-.094-.89-.937-.937h-2.438q-1.5-2.58-2.39-4.125a6 6 0 0 0-.376-.657q-.467.375-.656 1.22-.234.89.328 1.921.657 1.125 1.64 2.86.798 1.406 1.829 3.187.516.656 1.266.328.702-.516.375-1.266l-.938-1.593z' />
    </g>
    <defs>
      <clipPath id='33141158ad9e8a9156dd81893d4b9880__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosXlIcon);
export default ForwardRef;
