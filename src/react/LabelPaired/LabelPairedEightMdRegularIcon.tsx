import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.5 8.75a3.76 3.76 0 0 1-1.656 3.125C9.094 12.469 10 13.75 10 15.25A3.74 3.74 0 0 1 6.25 19h-2.5A3.72 3.72 0 0 1 0 15.25c0-1.5.875-2.781 2.125-3.375C1.125 11.188.5 10.063.5 8.75A3.74 3.74 0 0 1 4.25 5h1.5A3.76 3.76 0 0 1 9.5 8.75M5.75 12.5h-2A2.754 2.754 0 0 0 1 15.25 2.734 2.734 0 0 0 3.75 18h2.5C7.75 18 9 16.781 9 15.25c0-1.5-1.25-2.75-2.75-2.75zm0-1c1.5 0 2.75-1.219 2.75-2.75C8.5 7.25 7.25 6 5.75 6h-1.5A2.754 2.754 0 0 0 1.5 8.75a2.73 2.73 0 0 0 2.719 2.75H5.75' />
    </g>
    <defs>
      <clipPath id='aa6e7f9a5801b9ca8e7c7380c0ea8f28__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightMdRegularIcon);
export default ForwardRef;
