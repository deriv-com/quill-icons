import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchXlBoldIcon = (
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
      <path d='M12 8.25V9c0 .422-.375.75-.75.75h-4.5A.74.74 0 0 1 6 9v-.75H4.5c-.844 0-1.5.703-1.5 1.5v16.5c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5V9.75c0-.797-.703-1.5-1.5-1.5zM.75 9.75C.75 7.688 2.39 6 4.5 6h9a3.76 3.76 0 0 1 3.75 3.75v16.5c0 2.11-1.687 3.75-3.75 3.75h-9C2.39 30 .75 28.36.75 26.25z' />
    </g>
    <defs>
      <clipPath id='336ff11b1899a248a52f3bc5d3effc80__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchXlBoldIcon);
export default ForwardRef;
