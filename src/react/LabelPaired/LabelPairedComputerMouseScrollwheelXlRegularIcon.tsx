import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelXlRegularIcon = (
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
      <path d='M16.5 22.5v-9q-.047-2.531-1.734-4.266Q13.03 7.547 10.5 7.5h-3q-2.531.047-4.266 1.734Q1.547 10.97 1.5 13.5v9q.047 2.532 1.734 4.266Q4.97 28.454 7.5 28.5h3q2.532-.047 4.266-1.734Q16.454 25.03 16.5 22.5M0 13.5q.094-3.187 2.203-5.297T7.5 6h3q3.187.094 5.297 2.203T18 13.5v9q-.094 3.187-2.203 5.297T10.5 30h-3q-3.187-.094-5.297-2.203T0 22.5zm9.75-2.25v3q-.047.703-.75.75-.703-.047-.75-.75v-3q.047-.703.75-.75.703.047.75.75' />
    </g>
    <defs>
      <clipPath id='3155e2959e2aeb7d398a2ff734b2e6b3__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelXlRegularIcon);
export default ForwardRef;
