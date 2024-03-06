import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeCaptionBoldIcon = (
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
      <path d='M6 4.625q-1.335 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.84 4.84 0 0 0 1.125 9.5q0 1.29.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.7 4.7 0 0 0 6 14.376q1.335 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.84 4.84 0 0 0 .657-2.438q0-1.29-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.67 4.67 0 0 0 6 4.625M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m-.164-6L3 7.93a.68.68 0 0 1 .234-.47q.212-.21.516-.21h4.5q.305 0 .516.188A.77.77 0 0 1 9 7.93L6.164 9.5A.3.3 0 0 1 6 9.547a2 2 0 0 1-.164-.047m.703.656L9 8.796V11a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21h-4.5a.73.73 0 0 1-.54-.21A.73.73 0 0 1 3 11V8.797l2.46 1.36a1.29 1.29 0 0 0 1.08 0' />
    </g>
    <defs>
      <clipPath id='0177aceccbc6324613f011aded3261e0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeCaptionBoldIcon);
export default ForwardRef;
