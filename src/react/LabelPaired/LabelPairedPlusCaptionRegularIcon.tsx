import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusCaptionRegularIcon = (
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
      <path d='M5.875 5v4.125H10q.352.023.375.375-.023.352-.375.375H5.875V14q-.023.352-.375.375-.352-.023-.375-.375V9.875H1Q.648 9.852.625 9.5q.023-.352.375-.375h4.125V5q.023-.352.375-.375.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='f803ac66c7371a0eb7825d1afa2a9b28__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusCaptionRegularIcon);
export default ForwardRef;
