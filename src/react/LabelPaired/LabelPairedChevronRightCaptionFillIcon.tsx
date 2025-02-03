import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightCaptionFillIcon = (
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
      <path d='M7.516 8.984a.723.723 0 0 1 0 1.055l-4.5 4.5a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055L5.92 9.5l-3.96-3.96a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0z' />
    </g>
    <defs>
      <clipPath id='f596f0fdc8b89a7a2cb5c60cf7b4e3da__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightCaptionFillIcon);
export default ForwardRef;
