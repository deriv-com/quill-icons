import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonCaptionRegularIcon = (
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
      <path d='M6.75 4.25h-4.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6h6V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21m.75 7.5h-6V14q0 .328.21.54.212.21.54.21h4.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54zM2.25 3.5h4.5q.632.024 1.055.445.421.423.445 1.055v9a1.52 1.52 0 0 1-.445 1.055q-.423.421-1.055.445h-4.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .75 14V5q.024-.632.445-1.055.423-.421 1.055-.445m1.125 9.75q.023-.352.375-.375h1.5q.352.023.375.375-.023.352-.375.375h-1.5q-.352-.023-.375-.375' />
    </g>
    <defs>
      <clipPath id='57709419dea49423ee55b208799693c1__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonCaptionRegularIcon);
export default ForwardRef;
