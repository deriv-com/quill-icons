import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckCaptionFillIcon = (
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
      <path d='M10.516 5.984a.723.723 0 0 1 0 1.055l-6 6a.723.723 0 0 1-1.055 0l-3-3a.723.723 0 0 1 0-1.055.723.723 0 0 1 1.055 0L4 11.445l5.46-5.46a.723.723 0 0 1 1.056 0' />
    </g>
    <defs>
      <clipPath id='f161a23ab413eabf3e46dad3a285333e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckCaptionFillIcon);
export default ForwardRef;
