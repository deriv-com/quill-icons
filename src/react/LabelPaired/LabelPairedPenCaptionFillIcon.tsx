import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.484 3.969a1.514 1.514 0 0 1 2.133 0l.914.914a1.514 1.514 0 0 1 0 2.133L10.406 8.14 7.36 5.094zM6.82 5.633 9.867 8.68l-5.46 5.46a2.04 2.04 0 0 1-.868.516L.703 15.5a.53.53 0 0 1-.539-.164.48.48 0 0 1-.14-.54l.82-2.835c.094-.328.281-.633.515-.867z' />
    </g>
    <defs>
      <clipPath id='4adb57cd442e22fc29b576bcf159d82f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCaptionFillIcon);
export default ForwardRef;
