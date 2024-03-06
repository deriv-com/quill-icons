import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardCaptionBoldIcon = (
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
      <path d='M5.25 5.703q0-.305.21-.492Q5.65 5 5.954 5q.234 0 .422.14l5.39 3.915Q12 9.22 12 9.5a.52.52 0 0 1-.234.445L6.375 13.86a.7.7 0 0 1-.422.141.63.63 0 0 1-.492-.21.63.63 0 0 1-.211-.493v-2.32l-4.148 2.906A.74.74 0 0 1 .703 14a.63.63 0 0 1-.492-.21.63.63 0 0 1-.211-.493V5.703q0-.305.21-.492Q.4 5 .704 5q.235 0 .399.117L5.25 8.023zm0 3.703L1.125 6.523V12.5L5.25 9.594zm5.227.094L6.375 6.523v5.954z' />
    </g>
    <defs>
      <clipPath id='e79085dfe35da8d1f92e4fd1d330e3f1__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardCaptionBoldIcon);
export default ForwardRef;
