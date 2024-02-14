import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftXlBoldIcon = (
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
      <path d='M2.625 25.5q-1.03-.093-1.125-1.125v-11.25q.095-1.03 1.125-1.125 1.032.095 1.125 1.125v8.531l10.828-10.828q.797-.655 1.594 0 .656.797 0 1.594L5.344 23.25h8.531q1.032.094 1.125 1.125-.093 1.032-1.125 1.125z' />
    </g>
    <defs>
      <clipPath id='80911cb510b122f84a499d4538865990__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftXlBoldIcon);
export default ForwardRef;
