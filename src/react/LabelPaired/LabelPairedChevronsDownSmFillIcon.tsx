import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownSmFillIcon = (
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
      <path d='M7.602 16.629a.843.843 0 0 1-1.23 0l-5.25-5.25a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0L7 14.768l4.621-4.62a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23zm5.25-10.5-5.25 5.25a.843.843 0 0 1-1.23 0l-5.25-5.25a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0L7 9.518l4.621-4.62a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23' />
    </g>
    <defs>
      <clipPath id='cb581e2bde1437cf3453ac8fb16f3718__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownSmFillIcon);
export default ForwardRef;
