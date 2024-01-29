import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenCaptionBoldIcon = (
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
      <path d='M1.375 14q.023.352.375.375h7.5q.352-.023.375-.375v-1.875h-8.25zm0-3h8.25V5q-.023-.352-.375-.375h-7.5q-.352.023-.375.375zM.25 5q.024-.632.445-1.055.422-.421 1.055-.445h7.5q.633.024 1.055.445.421.423.445 1.055v9a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14zm4.5 7.875h1.5q.352.023.375.375-.023.352-.375.375h-1.5q-.352-.023-.375-.375.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='51fa533cea8277ceddb89dddea44e757__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenCaptionBoldIcon);
export default ForwardRef;
