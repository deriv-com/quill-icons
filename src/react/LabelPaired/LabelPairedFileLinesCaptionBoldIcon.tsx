import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileLinesCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 14.375h6A.385.385 0 0 0 7.875 14V7.25H6a.74.74 0 0 1-.75-.75V4.625H1.5A.385.385 0 0 0 1.125 5v9c0 .21.164.375.375.375M1.5 3.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m1.313 6h3.375a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563m0 2.25h3.375a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563' />
    </g>
    <defs>
      <clipPath id='a30fb1abc1c9b3ca855e6043de73ad85__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileLinesCaptionBoldIcon);
export default ForwardRef;
