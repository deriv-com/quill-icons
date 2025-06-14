import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListXlBoldIcon = (
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
      <path d='M3 9.75c-.422 0-.75.375-.75.75v15c0 .422.328.75.75.75h15c.375 0 .75-.328.75-.75v-15c0-.375-.375-.75-.75-.75zm-3 .75c0-1.64 1.313-3 3-3h15c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm4.5 3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5m4.875 0c0-.61.469-1.125 1.125-1.125H15c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 15 14.625h-4.5c-.656 0-1.125-.469-1.125-1.125m0 4.5c0-.61.469-1.125 1.125-1.125H15c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 15 19.125h-4.5c-.656 0-1.125-.469-1.125-1.125m0 4.5c0-.61.469-1.125 1.125-1.125H15c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 15 23.625h-4.5c-.656 0-1.125-.469-1.125-1.125M6 19.5A1.48 1.48 0 0 1 4.5 18c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5m-1.5 3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='208398fa324e31d87ee916d5999a2bc9__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListXlBoldIcon);
export default ForwardRef;
