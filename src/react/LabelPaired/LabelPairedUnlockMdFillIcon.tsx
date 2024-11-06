import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 8.5V10H12c1.094 0 2 .906 2 2v6c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-6c0-1.094.875-2 2-2h.5V8.5C2.5 6.031 4.5 4 7 4a4.51 4.51 0 0 1 4.063 2.594c.218.5 0 1.093-.5 1.312-.47.25-1.094.032-1.313-.468C8.844 6.594 7.969 6 7 6a2.487 2.487 0 0 0-2.5 2.5' />
    </g>
    <defs>
      <clipPath id='cb48a05eb2b7ef49344ac9ee544c696f__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockMdFillIcon);
export default ForwardRef;
