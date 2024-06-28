import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.063 11H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h.781A7 7 0 0 1 8 5h1.531c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H8c-2.625 0-4.844 1.688-5.687 4H8.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2.063C2 11.344 2 11.688 2 12c0 .344.031.688.063 1H8.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2.313A6.03 6.03 0 0 0 8 18h1.531c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H8c-3.187 0-5.875-2.094-6.719-5H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h.563C1 12.688 1 12.344 1 12c0-.312 0-.656.063-1' />
    </g>
    <defs>
      <clipPath id='59dfbbcaf06b338ec448b7cab004c478__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignMdRegularIcon);
export default ForwardRef;
