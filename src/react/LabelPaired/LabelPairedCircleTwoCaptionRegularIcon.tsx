import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoCaptionRegularIcon = (
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
      <path d='M6 4.25a5.4 5.4 0 0 0-2.625.703 5.4 5.4 0 0 0-1.922 1.922 5.25 5.25 0 0 0 0 5.25 5.4 5.4 0 0 0 1.922 1.922A5.4 5.4 0 0 0 6 14.75a5.4 5.4 0 0 0 2.625-.703 5.4 5.4 0 0 0 1.922-1.922 5.25 5.25 0 0 0 0-5.25 5.4 5.4 0 0 0-1.922-1.922A5.4 5.4 0 0 0 6 4.25M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m-.914-7.922-.328.328q-.281.21-.54-.023-.21-.281.024-.54l.328-.304q.586-.54 1.383-.539.82.047 1.36.586.538.563.562 1.383 0 .797-.562 1.383L5.414 11.75h2.461q.352.023.375.375-.023.352-.375.375H4.5a.43.43 0 0 1-.352-.234.37.37 0 0 1 .094-.399l2.531-2.531q.352-.376.352-.867-.024-.516-.352-.844a1.193 1.193 0 0 0-1.687-.047' />
    </g>
    <defs>
      <clipPath id='7417b0edb4c45a88f54ba5c1695e8004__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoCaptionRegularIcon);
export default ForwardRef;
