import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSevenCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.625q-1.335 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.84 4.84 0 0 0 1.125 9.5q0 1.29.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.7 4.7 0 0 0 6 14.376q1.335 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.84 4.84 0 0 0 .657-2.438q0-1.29-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.67 4.67 0 0 0 6 4.625M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m-1.687-9h3.375q.305 0 .492.281a.55.55 0 0 1 0 .54l-2.625 4.874q-.282.445-.75.235-.445-.282-.235-.75l2.18-4.055H4.313q-.516-.047-.563-.562.047-.516.563-.563' />
    </g>
    <defs>
      <clipPath id='c8e4caa9fc6e044d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSevenCaptionBoldIcon);
export default ForwardRef;
