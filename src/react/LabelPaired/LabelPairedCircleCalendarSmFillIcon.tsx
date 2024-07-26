import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M5.688 6.375a.45.45 0 0 0-.438.438v.437h-.875a.88.88 0 0 0-.875.875V9h7v-.875a.9.9 0 0 0-.875-.875H8.75v-.437a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438v.437h-1.75v-.437a.47.47 0 0 0-.437-.438m-2.188 7c0 .492.383.875.875.875h5.25a.88.88 0 0 0 .875-.875v-3.5h-7z' />
    </g>
    <defs>
      <clipPath id='da540e116d07b4653fd468530930c85c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarSmFillIcon);
export default ForwardRef;
