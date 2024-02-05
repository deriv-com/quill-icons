import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareCaptionRegularIcon = (
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
      <path d='m6.258 3.617 2.437 2.438q.236.257 0 .515-.258.236-.515 0L6.375 4.79V11q-.023.352-.375.375-.352-.023-.375-.375V4.79L3.82 6.57q-.258.236-.515 0-.236-.257 0-.515l2.437-2.438q.258-.234.516 0M1.5 4.25h.75q.352.023.375.375-.023.352-.375.375H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54V14q0 .328.21.54.212.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V5.75a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21h-.75q-.352-.023-.375-.375.023-.352.375-.375h.75q.633.024 1.055.445.421.423.445 1.055V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V5.75q.024-.632.445-1.055.423-.421 1.055-.445' />
    </g>
    <defs>
      <clipPath id='69fc6d2750da31f77316e2d48426281f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareCaptionRegularIcon);
export default ForwardRef;
