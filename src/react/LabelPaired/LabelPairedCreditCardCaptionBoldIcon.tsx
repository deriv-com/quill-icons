import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.25 5.375H1.75q-.352.023-.375.375v.75h11.25v-.75q-.023-.352-.375-.375m.375 3.375H1.375v4.5q.023.352.375.375h10.5q.352-.023.375-.375zM1.75 4.25h10.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25v-7.5q.024-.632.445-1.055.422-.421 1.055-.445m1.313 7.125h1.124q.516.047.563.563-.047.514-.562.562H3.063q-.516-.047-.563-.562.047-.516.563-.563m3 0h2.625q.514.047.562.563-.047.514-.562.562H6.062q-.514-.047-.562-.562.047-.516.563-.563' />
    </g>
    <defs>
      <clipPath id='ae033778975131c503a64c38f0d68ac2__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardCaptionBoldIcon);
export default ForwardRef;
