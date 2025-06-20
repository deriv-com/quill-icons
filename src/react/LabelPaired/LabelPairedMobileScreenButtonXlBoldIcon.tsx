import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonXlBoldIcon = (
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
      <path d='M3 27c0 .422.328.75.75.75h10.5c.375 0 .75-.328.75-.75v-3.75H3zm0-6h12V9c0-.375-.375-.75-.75-.75H3.75c-.422 0-.75.375-.75.75zM.75 9c0-1.64 1.313-3 3-3h10.5c1.64 0 3 1.36 3 3v18c0 1.688-1.36 3-3 3H3.75c-1.687 0-3-1.312-3-3zM7.5 24.75h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-3a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='176ce65c8bc5d14fc254cde74a429824__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonXlBoldIcon);
export default ForwardRef;
