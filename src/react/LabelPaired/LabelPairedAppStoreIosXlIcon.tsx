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
      <path d='M18.75 7.5C19.969 7.5 21 8.531 21 9.75v16.5a2.25 2.25 0 0 1-2.25 2.25H2.25A2.22 2.22 0 0 1 0 26.25V9.75A2.25 2.25 0 0 1 2.25 7.5zM5.953 24.047l.89-1.547c-.468-.61-1.124-.797-1.874-.562l-.657 1.171c-.28.422-.093 1.032.329 1.266a.934.934 0 0 0 1.312-.328m6.469-2.531c.422-.75-.094-1.875-1.031-1.875H8.484l3.985-6.985c.281-.422.14-.984-.328-1.265-.422-.235-1.032-.094-1.266.328l-.422.75-.422-.75c-.234-.422-.844-.563-1.265-.328-.47.28-.61.843-.375 1.265l.984 1.688-3.047 5.297h-2.39a.94.94 0 0 0-.938.937.94.94 0 0 0 .938.938zm4.64 0a.94.94 0 0 0 .938-.938.94.94 0 0 0-.937-.937h-2.438c-1.266-2.11-2.156-3.703-2.766-4.782-.562.47-1.125 1.829-.328 3.188.75 1.312 1.922 3.328 3.469 6a.91.91 0 0 0 1.266.328.91.91 0 0 0 .328-1.266l-.89-1.593z' />
    </g>
    <defs>
      <clipPath id='d76df3ec80c5e83dfc44240129f0b606__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosXlIcon);
export default ForwardRef;
