import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsXlBoldIcon = (
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
      <path d='M0 10.125C0 9.515.469 9 1.125 9h18.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 11.25 0 10.781 0 10.125m0 7.5c0-.61.469-1.125 1.125-1.125h18.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 18.75 0 18.281 0 17.625m21 7.5a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 26.25 0 25.781 0 25.125 0 24.515.469 24 1.125 24h18.75c.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='49d61e92423e2605be657ca872325690__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsXlBoldIcon);
export default ForwardRef;
