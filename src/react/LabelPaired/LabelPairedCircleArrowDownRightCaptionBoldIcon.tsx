import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownRightCaptionBoldIcon = (
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
      <path d='M6 14.375q1.335 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.84 4.84 0 0 0 .657-2.438q0-1.29-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.67 4.67 0 0 0 6 4.625q-1.335 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.84 4.84 0 0 0 1.125 9.5q0 1.29.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.7 4.7 0 0 0 6 14.376M6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797 6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5m-1.5 8.625q-.516-.047-.562-.562.045-.516.562-.563h2.203L3.54 7.836q-.328-.399 0-.797.398-.328.797 0L7.5 10.203v-2.39q.047-.516.563-.563.514.047.562.563v3.75q-.047.514-.562.562z' />
    </g>
    <defs>
      <clipPath id='83b54c5b5762c46211225585a1f14638__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownRightCaptionBoldIcon);
export default ForwardRef;
