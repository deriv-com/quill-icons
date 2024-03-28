import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 22.5v-9c0-2.86-2.39-5.25-5.25-5.25h-3c-2.906 0-5.25 2.39-5.25 5.25v9a5.24 5.24 0 0 0 5.25 5.25h3c2.86 0 5.25-2.344 5.25-5.25M0 13.5C0 9.375 3.328 6 7.5 6h3c4.125 0 7.5 3.375 7.5 7.5v9c0 4.172-3.375 7.5-7.5 7.5h-3A7.46 7.46 0 0 1 0 22.5zm9-3c.797 0 1.5.703 1.5 1.5v1.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V12c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='9e15303f7b30fbd2cb525079807d9386__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelXlBoldIcon);
export default ForwardRef;
