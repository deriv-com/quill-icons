import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileCaptionRegularIcon = (
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
      <path d='M3 4.25a.755.755 0 0 0-.75.75v5.25h6V11H.773c.141.445.54.75 1.008.75H8.25v.75H1.781A1.78 1.78 0 0 1 0 10.719c0-.258.188-.469.445-.469H1.5V5c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v.75h-.75V5a.77.77 0 0 0-.75-.75zm6.75 3.375v6.75c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375v-6.75a.4.4 0 0 0-.375-.375h-3.75a.385.385 0 0 0-.375.375m-.75 0c0-.61.492-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125v6.75c0 .633-.516 1.125-1.125 1.125h-3.75A1.11 1.11 0 0 1 9 14.375z' />
    </g>
    <defs>
      <clipPath id='4d9f29e6f8d4c1faca4f90aa203ffda5__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileCaptionRegularIcon);
export default ForwardRef;
