import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 3.5h7.5c.82 0 1.5.68 1.5 1.5v.75h-1.5V5H3v5.25h5.25v2.25H1.781A1.78 1.78 0 0 1 0 10.719c0-.258.188-.469.445-.469H1.5V5c0-.82.656-1.5 1.5-1.5M10.5 14h3V8h-3zM9 7.625c0-.61.492-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125v6.75c0 .633-.516 1.125-1.125 1.125h-3.75A1.11 1.11 0 0 1 9 14.375z' />
    </g>
    <defs>
      <clipPath id='61f77bb563747aa79649498efa31457a__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileCaptionFillIcon);
export default ForwardRef;
