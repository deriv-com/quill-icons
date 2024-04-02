import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchXlFillIcon = (
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
      <path d='M6 9H4.5c-.422 0-.75.375-.75.75v16.5c0 .422.328.75.75.75h9c.375 0 .75-.328.75-.75V9.75c0-.375-.375-.75-.75-.75H12v.75c0 .422-.375.75-.75.75h-4.5A.74.74 0 0 1 6 9.75zM4.5 6h9a3.76 3.76 0 0 1 3.75 3.75v16.5c0 2.11-1.687 3.75-3.75 3.75h-9C2.39 30 .75 28.36.75 26.25V9.75C.75 7.688 2.39 6 4.5 6M6 24.75c0-.375.328-.75.75-.75h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-4.5a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='a4ec7938ff395f69fc176de41b78b240__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchXlFillIcon);
export default ForwardRef;
