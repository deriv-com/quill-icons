import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.121 10.148 5.25-5.25a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-4.62 4.622 4.62 4.648a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-5.25-5.25a.843.843 0 0 1 0-1.23m10.5-5.25a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-4.62 4.622 4.62 4.648a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-5.25-5.25a.843.843 0 0 1 0-1.23z' />
    </g>
    <defs>
      <clipPath id='a2c7e7e0bdf0d23ce4a8ed27407e7341__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftSmFillIcon);
export default ForwardRef;
