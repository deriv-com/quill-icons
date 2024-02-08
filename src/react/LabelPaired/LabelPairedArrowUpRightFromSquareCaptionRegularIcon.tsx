import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareCaptionRegularIcon = (
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
      <path d='M7.875 3.5h3.75q.352.023.375.375v3.75q-.023.352-.375.375-.352-.023-.375-.375V4.789l-5.742 5.719q-.258.234-.516 0-.234-.258 0-.516l5.719-5.742H7.875q-.352-.023-.375-.375.023-.352.375-.375M1.5 4.25h3.375q.352.023.375.375-.023.352-.375.375H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54V14q0 .328.21.54.212.21.54.21h8.25a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-3.375q.023-.352.375-.375.352.023.375.375V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V5.75q.024-.632.445-1.055.423-.421 1.055-.445' />
    </g>
    <defs>
      <clipPath id='e9a85c43230d9d316190516f9acc82ea__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareCaptionRegularIcon);
export default ForwardRef;
