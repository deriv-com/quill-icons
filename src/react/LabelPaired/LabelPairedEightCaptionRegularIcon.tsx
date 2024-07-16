import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightCaptionRegularIcon = (
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
      <path d='M7.375 7.063c0 .984-.492 1.828-1.242 2.343.937.446 1.617 1.406 1.617 2.531a2.806 2.806 0 0 1-2.812 2.813H3.063A2.79 2.79 0 0 1 .25 11.938c0-1.126.656-2.086 1.594-2.532A2.8 2.8 0 0 1 .625 7.062 2.806 2.806 0 0 1 3.438 4.25h1.124a2.82 2.82 0 0 1 2.813 2.813M4.563 9.875H3.062A2.066 2.066 0 0 0 1 11.938 2.05 2.05 0 0 0 3.063 14h1.874A2.066 2.066 0 0 0 7 11.938a2.08 2.08 0 0 0-2.062-2.063zm0-.75a2.066 2.066 0 0 0 2.062-2.062A2.08 2.08 0 0 0 4.563 5H3.438a2.066 2.066 0 0 0-2.063 2.063c0 1.148.914 2.062 2.04 2.062h1.148' />
    </g>
    <defs>
      <clipPath id='3108c0e0c58edf5af54b9bd722f0db7e__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightCaptionRegularIcon);
export default ForwardRef;
