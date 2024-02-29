import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeCaptionRegularIcon = (
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
      <path d='M1.75 5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v7.5q0 .328.21.54.212.21.54.21h10.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-7.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-1.5.75q.024-.632.445-1.055.422-.421 1.055-.445h10.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25zM2.5 6.875q.023-.352.375-.375.352.023.375.375v5.25q-.023.352-.375.375-.352-.023-.375-.375zm6.75 0q.023-.352.375-.375.352.023.375.375v5.25q-.023.352-.375.375-.352-.023-.375-.375zm1.875-.375q.352.023.375.375v5.25q-.023.352-.375.375-.352-.023-.375-.375v-5.25q.023-.352.375-.375M4 6.875q.023-.352.375-.375.352.023.375.375v5.25q-.023.352-.375.375-.352-.023-.375-.375zM5.875 6.5q.352.023.375.375v5.25q-.023.352-.375.375-.352-.023-.375-.375v-5.25q.023-.352.375-.375m1.5.375q.023-.352.375-.375.352.023.375.375v5.25q-.023.352-.375.375-.352-.023-.375-.375z' />
    </g>
    <defs>
      <clipPath id='512fc599ce8e134860b2c586716932d3__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeCaptionRegularIcon);
export default ForwardRef;
