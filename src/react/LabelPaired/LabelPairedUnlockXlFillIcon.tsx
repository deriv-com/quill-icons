import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockXlFillIcon = (
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
      <path d='M6.75 12.75V15H18c1.64 0 3 1.36 3 3v9c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-9c0-1.64 1.313-3 3-3h.75v-2.25c0-3.703 3-6.75 6.75-6.75 2.672 0 5.016 1.594 6.094 3.89.328.75 0 1.641-.75 1.97-.703.374-1.64.046-1.969-.704C13.265 9.891 11.953 9 10.5 9a3.73 3.73 0 0 0-3.75 3.75' />
    </g>
    <defs>
      <clipPath id='15e63fc2bee5f76934abe33b8f601183__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockXlFillIcon);
export default ForwardRef;
