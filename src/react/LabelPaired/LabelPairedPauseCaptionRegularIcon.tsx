import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 5.75A.385.385 0 0 0 1 6.125v6.75c0 .21.164.375.375.375H2.5a.385.385 0 0 0 .375-.375v-6.75A.4.4 0 0 0 2.5 5.75zM.25 6.125C.25 5.515.742 5 1.375 5H2.5c.61 0 1.125.516 1.125 1.125v6.75C3.625 13.508 3.109 14 2.5 14H1.375A1.11 1.11 0 0 1 .25 12.875zM5.5 5.75a.385.385 0 0 0-.375.375v6.75c0 .21.164.375.375.375h1.125A.385.385 0 0 0 7 12.875v-6.75a.4.4 0 0 0-.375-.375zm-1.125.375C4.375 5.515 4.867 5 5.5 5h1.125c.61 0 1.125.516 1.125 1.125v6.75c0 .633-.516 1.125-1.125 1.125H5.5a1.11 1.11 0 0 1-1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='90703ecc92d2a18639786b22e31ef66a__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseCaptionRegularIcon);
export default ForwardRef;
