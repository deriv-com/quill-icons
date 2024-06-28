import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.375 10.5c.61 0 1.125.516 1.125 1.125v11.25A1.11 1.11 0 0 1 15.375 24c-.656 0-1.125-.469-1.125-1.125v-8.531L3.422 25.172c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547l10.828-10.828H4.125A1.11 1.11 0 0 1 3 11.672c0-.656.469-1.125 1.125-1.125h11.25z' />
    </g>
    <defs>
      <clipPath id='704335ec8b0daa78215d020834f269ca__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightXlBoldIcon);
export default ForwardRef;
