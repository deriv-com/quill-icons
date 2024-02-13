import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeCaptionRegularIcon = (
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
      <path d='M1.5 5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54V8h10.5V5.75a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zM.75 8.75v4.5q0 .328.21.54.212.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-4.5zm-.75-3q.024-.632.445-1.055.423-.421 1.055-.445h9q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 13.25z' />
    </g>
    <defs>
      <clipPath id='93f303db3499a4113f8a8c75c46b1969__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeCaptionRegularIcon);
export default ForwardRef;
