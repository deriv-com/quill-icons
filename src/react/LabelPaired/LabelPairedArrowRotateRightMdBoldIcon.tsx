import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.75 11h-4.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.813l-.844-1c-1.031-1.219-2.531-2-4.219-2A5.49 5.49 0 0 0 2.5 12c0 3.063 2.438 5.5 5.5 5.5a5.45 5.45 0 0 0 3.281-1.094.75.75 0 0 1 1.063.157.75.75 0 0 1-.156 1.062C11.03 18.5 9.562 19 8 19c-3.875 0-7-3.125-7-7 0-3.844 3.125-7 7-7 2.156 0 4.094 1 5.375 2.531l.625.75V5.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v4.5a.74.74 0 0 1-.75.75' />
    </g>
    <defs>
      <clipPath id='a7b08434b617e86db15d38a4d1f7ae11__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightMdBoldIcon);
export default ForwardRef;
