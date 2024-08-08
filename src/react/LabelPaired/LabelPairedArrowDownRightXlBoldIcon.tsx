import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightXlBoldIcon = (
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
      <path d='M15.375 25.5H4.125C3.469 25.5 3 25.031 3 24.375c0-.61.469-1.125 1.125-1.125h8.531L1.828 12.422c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0L14.25 21.703v-8.578c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v11.25a1.11 1.11 0 0 1-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='1d731fda7ea044e3b6c2e8c8cff194df__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightXlBoldIcon);
export default ForwardRef;
