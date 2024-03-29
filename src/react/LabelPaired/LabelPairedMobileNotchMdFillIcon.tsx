import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 6H3c-.281 0-.5.25-.5.5v11c0 .281.219.5.5.5h6c.25 0 .5-.219.5-.5v-11c0-.25-.25-.5-.5-.5H8v.5c0 .281-.25.5-.5.5h-3a.494.494 0 0 1-.5-.5zM3 4h6c1.375 0 2.5 1.125 2.5 2.5v11c0 1.406-1.125 2.5-2.5 2.5H3a2.47 2.47 0 0 1-2.5-2.5v-11C.5 5.125 1.594 4 3 4m1 12.5c0-.25.219-.5.5-.5h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-3a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='64b3c6cfb3ebcfabcbf6686689d1b322__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchMdFillIcon);
export default ForwardRef;
