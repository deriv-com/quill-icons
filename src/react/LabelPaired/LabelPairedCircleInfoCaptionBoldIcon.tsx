import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleInfoCaptionBoldIcon = (
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
      <path d='M6 4.625q-1.335 0-2.437.656A4.87 4.87 0 0 0 1.78 7.063 4.84 4.84 0 0 0 1.125 9.5q0 1.29.656 2.438a4.87 4.87 0 0 0 1.782 1.78A4.7 4.7 0 0 0 6 14.376q1.335 0 2.438-.656a4.87 4.87 0 0 0 1.78-1.781 4.84 4.84 0 0 0 .657-2.438q0-1.29-.656-2.437A4.87 4.87 0 0 0 8.438 5.28 4.67 4.67 0 0 0 6 4.625M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m-.937-4.125h.562v-1.5h-.562q-.516-.047-.563-.562.047-.516.563-.563h1.125q.514.047.562.563v2.062h.188q.514.047.562.563-.047.514-.562.562H5.063q-.516-.047-.563-.562.047-.516.563-.563M6 8a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54A.73.73 0 0 1 6 6.5a.73.73 0 0 1 .54.21q.21.212.21.54a.73.73 0 0 1-.21.54A.73.73 0 0 1 6 8' />
    </g>
    <defs>
      <clipPath id='0de38627322e827ad5781b81f7a9475d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleInfoCaptionBoldIcon);
export default ForwardRef;
