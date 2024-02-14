import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownCaptionBoldIcon = (
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
      <path d='M6 4.625q-1.335 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.84 4.84 0 0 0 1.125 9.5q0 1.29.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.7 4.7 0 0 0 6 14.376q1.335 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.84 4.84 0 0 0 .657-2.438q0-1.29-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.67 4.67 0 0 0 6 4.625M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m2.46-5.227-2.062 2.063q-.397.328-.796 0l-2.063-2.063q-.328-.397 0-.796.398-.33.797 0l1.101 1.101V7.063Q5.486 6.547 6 6.5q.516.047.563.563v3.515l1.101-1.101q.399-.33.797 0 .328.397 0 .796' />
    </g>
    <defs>
      <clipPath id='f3e7054578080a1c79637904eec94d09__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownCaptionBoldIcon);
export default ForwardRef;
