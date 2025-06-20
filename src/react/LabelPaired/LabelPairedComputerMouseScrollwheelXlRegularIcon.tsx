import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelXlRegularIcon = (
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
      <path d='M16.5 22.5v-9c0-3.281-2.719-6-6-6h-3c-3.328 0-6 2.719-6 6v9c0 3.328 2.672 6 6 6h3c3.281 0 6-2.672 6-6M0 13.5C0 9.375 3.328 6 7.5 6h3c4.125 0 7.5 3.375 7.5 7.5v9c0 4.172-3.375 7.5-7.5 7.5h-3A7.46 7.46 0 0 1 0 22.5zm9.75-2.25v3c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-3c0-.375.328-.75.75-.75.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='94a5b3c9d0c43fcd18df935eedad1c4f__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelXlRegularIcon);
export default ForwardRef;
