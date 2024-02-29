import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.25v.375a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21h-1.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.25h-.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v9q0 .328.21.54.212.21.54.21h4.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-.75 0h-1.5v.375h1.5zM.75 5q.024-.632.445-1.055.423-.421 1.055-.445h4.5q.632.024 1.055.445.421.423.445 1.055v9a1.52 1.52 0 0 1-.445 1.055q-.423.421-1.055.445h-4.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .75 14z' />
    </g>
    <defs>
      <clipPath id='ab76304e7b83e459e01cf7bad9e22e36__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchCaptionRegularIcon);
export default ForwardRef;
