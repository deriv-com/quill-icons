import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadXlBoldIcon = (
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
      <path d='M18.75 12H2.25v15c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75zM3 6h15c1.64 0 3 1.36 3 3v18c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m1.5 9.375c0-.61.469-1.125 1.125-1.125h9.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-9.75c-.656 0-1.125-.469-1.125-1.125m0 4.5c0-.61.469-1.125 1.125-1.125h9.75c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 15.375 21h-9.75c-.656 0-1.125-.469-1.125-1.125m0 4.5c0-.61.469-1.125 1.125-1.125h5.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-5.25c-.656 0-1.125-.469-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='176254852ab4cb0cce946aaff359330e__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadXlBoldIcon);
export default ForwardRef;
