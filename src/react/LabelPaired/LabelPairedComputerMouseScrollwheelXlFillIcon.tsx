import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelXlFillIcon = (
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
      <path d='M7.5 6h3c4.125 0 7.5 3.375 7.5 7.5v9c0 4.172-3.375 7.5-7.5 7.5h-3A7.46 7.46 0 0 1 0 22.5v-9C0 9.375 3.328 6 7.5 6m3 6c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5v1.5c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='e4e435bc2da509227b6c062a64eb4806__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelXlFillIcon);
export default ForwardRef;
