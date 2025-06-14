import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMinusXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 8.25c-1.36 0-2.578.75-3.281 1.875-.657 1.172-.657 2.625 0 3.75.703 1.172 1.922 1.875 3.281 1.875 1.313 0 2.531-.703 3.234-1.875.657-1.125.657-2.578 0-3.75C13.031 9 11.813 8.25 10.5 8.25m0 9.75a5.97 5.97 0 0 1-5.203-3c-1.078-1.828-1.078-4.125 0-6C6.375 7.172 8.344 6 10.5 6c2.11 0 4.078 1.172 5.156 3 1.078 1.875 1.078 4.172 0 6a5.95 5.95 0 0 1-5.156 3m-2.156 4.5c-3.094 0-5.625 2.297-6.047 5.25h16.36c-.423-2.953-2.954-5.25-6.048-5.25zm0-2.25h4.265C17.25 20.25 21 24 21 28.64c0 .75-.656 1.36-1.406 1.36H1.359C.61 30 0 29.39 0 28.64c0-4.64 3.703-8.39 8.344-8.39m13.781-4.875h6.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-6.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='39cd00e9f1fb3185471b5f9088c53ab4__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMinusXlBoldIcon);
export default ForwardRef;
