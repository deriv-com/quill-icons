import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m3.527-7.684-3.09-3.062a.644.644 0 0 0-.902 0l-3.062 3.062c-.274.274-.274.684 0 .93.246.274.656.274.93 0l1.94-1.941v4.976c0 .383.274.656.657.656a.65.65 0 0 0 .656-.656V9.055l1.942 1.941c.246.274.656.274.93 0 .245-.246.245-.656 0-.93' />
    </g>
    <defs>
      <clipPath id='b77408e6f6eb3b6ccb7eaa543f4a8a9d__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpSmFillIcon);
export default ForwardRef;
