import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 4.75A.74.74 0 0 1 .75 4a.76.76 0 0 1 .75.75v14.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75zM5.5 6h9c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-9A1.48 1.48 0 0 1 4 9.5v-2A1.5 1.5 0 0 1 5.5 6m0 7h5c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-5A1.48 1.48 0 0 1 4 16.5v-2A1.5 1.5 0 0 1 5.5 13' />
    </g>
    <defs>
      <clipPath id='ef3e18ebd80bbf4afb5d12e4fb2b12ec__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftMdFillIcon);
export default ForwardRef;
