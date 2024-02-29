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
      <path d='M15.375 25.5H4.125Q3.095 25.407 3 24.375q.095-1.03 1.125-1.125h8.531L1.828 12.422q-.655-.797 0-1.594.797-.655 1.594 0L14.25 21.656v-8.531q.095-1.03 1.125-1.125 1.032.095 1.125 1.125v11.25q-.093 1.032-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='e0ec311a69f4bfb0664ed841f0371b81__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightXlBoldIcon);
export default ForwardRef;
