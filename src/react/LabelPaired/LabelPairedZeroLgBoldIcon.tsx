import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 13A6.243 6.243 0 0 1 6.5 6.75c3.438 0 6.25 2.813 6.25 6.25v5a6.243 6.243 0 0 1-6.25 6.25A6.22 6.22 0 0 1 .25 18zM6.5 8.625c-2.422 0-4.375 1.992-4.375 4.375v5A4.37 4.37 0 0 0 6.5 22.375c2.383 0 4.375-1.953 4.375-4.375v-5c0-2.383-1.992-4.375-4.375-4.375' />
    </g>
    <defs>
      <clipPath id='47f991199d47c5b1927f5455e522d12e__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroLgBoldIcon);
export default ForwardRef;
