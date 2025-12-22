import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonMdBoldIcon = (
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
      <path d='M2 18c0 .281.219.5.5.5h7c.25 0 .5-.219.5-.5v-2.5H2zm0-4h8V6c0-.25-.25-.5-.5-.5h-7c-.281 0-.5.25-.5.5zM.5 6c0-1.094.875-2 2-2h7c1.094 0 2 .906 2 2v12c0 1.125-.906 2-2 2h-7c-1.125 0-2-.875-2-2zM5 16.5h2c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='c990bf517f94b2eb0310a8c8edd7b737__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonMdBoldIcon);
export default ForwardRef;
