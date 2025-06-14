import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignMdBoldIcon = (
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
      <path d='M1.5 11.5H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.031A7 7 0 0 1 8.5 5h.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H8.5A5.5 5.5 0 0 0 3.375 10H8.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H3v1h5.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H3.375c.781 2.063 2.781 3.5 5.125 3.5h.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H8.5c-3.187 0-5.875-2.094-6.719-5H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.75v-1' />
    </g>
    <defs>
      <clipPath id='a725bad62e11c196311a63f7383e536a__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignMdBoldIcon);
export default ForwardRef;
