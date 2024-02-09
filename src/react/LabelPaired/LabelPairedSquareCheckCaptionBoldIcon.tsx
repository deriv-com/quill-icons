import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckCaptionBoldIcon = (
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
      <path d='M1.75 5.375q-.352.023-.375.375v7.5q.023.352.375.375h7.5q.352-.023.375-.375v-7.5q-.023-.352-.375-.375zm-1.5.375q.024-.632.445-1.055.422-.421 1.055-.445h7.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25zm7.898 2.648-3 3q-.397.33-.796 0l-1.5-1.5q-.33-.397 0-.796.397-.33.796 0l1.102 1.101 2.602-2.601q.397-.33.796 0 .33.397 0 .796' />
    </g>
    <defs>
      <clipPath id='96f7b5a4a7d8d4c4b3bb127a15079f3f__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckCaptionBoldIcon);
export default ForwardRef;
