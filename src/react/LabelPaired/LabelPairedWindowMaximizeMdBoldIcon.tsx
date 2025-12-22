import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeMdBoldIcon = (
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
      <path d='M0 6.813a1.9 1.9 0 0 1 .219-.75C.406 5.75.656 5.469 1 5.28c.219-.125.5-.218.781-.25C1.844 5.031 1.906 5 2 5h12c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6.813M1.5 11v6c0 .281.219.5.5.5h12c.25 0 .5-.219.5-.5v-6z' />
    </g>
    <defs>
      <clipPath id='1cf1dc8d2e3b39c01cf5f80b516f45e9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeMdBoldIcon);
export default ForwardRef;
