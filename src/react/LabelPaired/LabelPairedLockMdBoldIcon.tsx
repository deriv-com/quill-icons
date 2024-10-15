import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockMdBoldIcon = (
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
      <path d='M4.5 8v2h5V8c0-1.375-1.125-2.5-2.5-2.5A2.487 2.487 0 0 0 4.5 8M3 10V8c0-2.187 1.781-4 4-4 2.188 0 4 1.813 4 4v2h1c1.094 0 2 .906 2 2v6c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-6c0-1.094.875-2 2-2zm-1.5 2v6c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5v-6c0-.25-.25-.5-.5-.5H2c-.281 0-.5.25-.5.5' />
    </g>
    <defs>
      <clipPath id='1e7a9c7c528b12eb96935e5b8ab2992b__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockMdBoldIcon);
export default ForwardRef;
