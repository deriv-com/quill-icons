import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockMdBoldIcon = (
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
      <path d='M4.5 8v2H12c1.094 0 2 .906 2 2v6c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-6c0-1.094.875-2 2-2h1V8c0-2.187 1.781-4 4-4a3.98 3.98 0 0 1 3.781 2.781.746.746 0 0 1-.469.938.746.746 0 0 1-.937-.469C9.031 6.25 8.094 5.5 7 5.5A2.487 2.487 0 0 0 4.5 8m-3 4v6c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5v-6c0-.25-.25-.5-.5-.5H2c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='430e67ae46cf9a50ebadb4d3648c4658__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockMdBoldIcon);
export default ForwardRef;
