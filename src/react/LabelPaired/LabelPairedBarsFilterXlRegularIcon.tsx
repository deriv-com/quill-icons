import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterXlRegularIcon = (
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
      <path d='M0 9.75C0 9.375.328 9 .75 9h19.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75A.74.74 0 0 1 0 9.75m3 7.5c0-.375.328-.75.75-.75h13.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.75a.74.74 0 0 1-.75-.75m10.5 7.5c0 .422-.375.75-.75.75h-4.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.5c.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='a37aa1711488db8337a18750f87fba55__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterXlRegularIcon);
export default ForwardRef;
