import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.688 5.313 3 3a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L6 8.438V18c0 .563-.469 1-1 1-.562 0-1-.437-1-1V8.438l-1.312 1.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l3-3a.964.964 0 0 1 1.407 0m11 10.406-3 3a.964.964 0 0 1-1.407 0l-3-3a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.406 0L12 15.593V6c0-.531.438-1 1-1 .531 0 1 .469 1 1v9.594l1.281-1.281a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406' />
    </g>
    <defs>
      <clipPath id='d32abb0b388b958d209739260bcbd67f__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownMdFillIcon);
export default ForwardRef;
