import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.875 11.125V13h6.25v-1.875A3.134 3.134 0 0 0 9 8a3.11 3.11 0 0 0-3.125 3.125M3.375 13v-1.875C3.375 8.039 5.875 5.5 9 5.5c3.086 0 5.625 2.54 5.625 5.625V13h.625c1.367 0 2.5 1.133 2.5 2.5V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23v-7.5c0-1.367 1.094-2.5 2.5-2.5z' />
    </g>
    <defs>
      <clipPath id='c7dd245bc3f57b56af998607076e8376__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockLgFillIcon);
export default ForwardRef;
