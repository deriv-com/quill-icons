import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M4.375 7.25a.45.45 0 0 0-.437.438c0 .246.19.437.437.437h5.25a.45.45 0 0 0 .438-.437.47.47 0 0 0-.438-.438H8.477l-.301-.3a.44.44 0 0 0-.301-.138h-1.75a.45.45 0 0 0-.328.137l-.3.301zm0 1.75.355 4.457c.028.465.41.793.875.793h2.762c.465 0 .848-.328.875-.793L9.625 9z' />
    </g>
    <defs>
      <clipPath id='5408a3eada86c42f58b52af48457f814__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashSmFillIcon);
export default ForwardRef;
