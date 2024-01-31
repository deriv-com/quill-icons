import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.75v7.5q0 .328.21.54.212.21.54.21h7.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V7.508a.73.73 0 0 0-.21-.54L8.03 5.212a.64.64 0 0 0-.281-.164V7.25a.73.73 0 0 1-.21.54A.73.73 0 0 1 7 8H2.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54M2.5 5v2.25H7V5zm-2.25.75q.024-.632.445-1.055.422-.421 1.055-.445h5.742q.633 0 1.078.445l1.735 1.735q.445.445.445 1.078v5.742a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25zM6.625 11a1.17 1.17 0 0 0-.562-.984 1.2 1.2 0 0 0-1.125 0q-.54.351-.563.984.024.633.563.984.563.282 1.125 0 .538-.351.562-.984M5.5 9.125q1.055.024 1.617.938.516.937 0 1.874-.562.915-1.617.938-1.054-.024-1.617-.937-.516-.938 0-1.876.563-.913 1.617-.937' />
    </g>
    <defs>
      <clipPath id='f89e58b2f9671d98__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskCaptionRegularIcon);
export default ForwardRef;
