import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardCaptionRegularIcon = (
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
      <path d='M1.75 5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v.75h12v-.75a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zM1 7.25v1.5h12v-1.5zM1 9.5v3.75q0 .328.21.54.212.21.54.21h10.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V9.5zM.25 5.75q.024-.632.445-1.055.422-.421 1.055-.445h10.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25zm2.25 6.375q.023-.352.375-.375h1.5q.352.023.375.375-.023.352-.375.375h-1.5q-.352-.023-.375-.375m3 0q.023-.352.375-.375h3q.352.023.375.375-.023.352-.375.375h-3q-.352-.023-.375-.375' />
    </g>
    <defs>
      <clipPath id='feabe69ed41f2d8c__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardCaptionRegularIcon);
export default ForwardRef;
