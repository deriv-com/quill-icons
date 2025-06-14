import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveMdBoldIcon = (
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
      <path d='M1 5.625A.77.77 0 0 1 1.75 5h6.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H2.375l-.75 4.25h4.25c2.25 0 4.125 1.875 4.125 4.125C10 17.156 8.125 19 5.875 19h-3C1.75 19 .688 18.375.188 17.344l-.125-.25a.74.74 0 0 1 .343-1 .74.74 0 0 1 1 .343l.125.25c.25.5.782.813 1.344.813h3A2.62 2.62 0 0 0 8.5 14.875a2.64 2.64 0 0 0-2.625-2.625H.75A.8.8 0 0 1 .156 12 .9.9 0 0 1 0 11.375z' />
    </g>
    <defs>
      <clipPath id='3aca4880f77ee3fbc083af07fa3bba5b__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveMdBoldIcon);
export default ForwardRef;
