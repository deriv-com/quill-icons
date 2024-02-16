import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeCaptionBoldIcon = (
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
      <path d='M1.75 5.375q-.352.023-.375.375v7.5q.023.352.375.375h10.5q.352-.023.375-.375v-7.5q-.023-.352-.375-.375zm-1.5.375q.024-.632.445-1.055.422-.421 1.055-.445h10.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25zm2.813.75q.514.047.562.563v4.875q-.047.514-.562.562-.516-.047-.563-.562V7.062q.047-.514.563-.562m1.687 0q.352.023.375.375v5.25q-.023.352-.375.375-.352-.023-.375-.375v-5.25q.023-.352.375-.375m1.125.563q.047-.516.563-.563.514.047.562.563v4.875q-.047.514-.562.562-.516-.047-.563-.562zM9.063 6.5q.514.047.562.563v4.875q-.047.514-.562.562-.516-.047-.563-.562V7.062q.047-.514.563-.562m1.687.375q.023-.352.375-.375.352.023.375.375v5.25q-.023.352-.375.375-.352-.023-.375-.375z' />
    </g>
    <defs>
      <clipPath id='59ba2dd5a9003633f6ead9a3acd32c65__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeCaptionBoldIcon);
export default ForwardRef;
