import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusXlBoldIcon = (
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
      <path d='M11.625 9.375v7.5h7.5c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-7.5v7.5A1.11 1.11 0 0 1 10.5 27.75c-.656 0-1.125-.469-1.125-1.125v-7.5h-7.5C1.219 19.125.75 18.656.75 18c0-.61.469-1.125 1.125-1.125h7.5v-7.5c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='cb54ddbe8746e9bfbfbbad7ac5219c61__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusXlBoldIcon);
export default ForwardRef;
