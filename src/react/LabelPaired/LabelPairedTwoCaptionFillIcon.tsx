import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.578 5.75c-.492 0-.984.21-1.336.563l-.726.726a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l.726-.726A3.4 3.4 0 0 1 3.579 4.25 3.41 3.41 0 0 1 7 7.672c0 .89-.375 1.758-1.008 2.39L2.805 13.25H7c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1a.75.75 0 0 1-.703-.445.76.76 0 0 1 .164-.82l4.477-4.477c.351-.352.562-.844.562-1.336A1.93 1.93 0 0 0 3.578 5.75' />
    </g>
    <defs>
      <clipPath id='5ea0ee7f235a7a8fe2653f7219d6f164__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoCaptionFillIcon);
export default ForwardRef;
