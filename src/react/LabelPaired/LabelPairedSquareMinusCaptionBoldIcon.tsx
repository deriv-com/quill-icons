import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareMinusCaptionBoldIcon = (
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
      <path d='M1.75 5.375q-.352.023-.375.375v7.5q.023.352.375.375h7.5q.352-.023.375-.375v-7.5q-.023-.352-.375-.375zm-1.5.375q.024-.632.445-1.055.422-.421 1.055-.445h7.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25zm3.563 3.188h3.375q.514.045.562.562-.047.515-.562.563H3.813q-.516-.048-.563-.563.047-.516.563-.562' />
    </g>
    <defs>
      <clipPath id='b5460c320b1e6d0c__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusCaptionBoldIcon);
export default ForwardRef;
