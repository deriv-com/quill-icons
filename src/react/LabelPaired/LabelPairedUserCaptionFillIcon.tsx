import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCaptionFillIcon = (
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
      <path d='M5.5 9.5A2.98 2.98 0 0 1 2.898 8a2.99 2.99 0 0 1 0-3A3.03 3.03 0 0 1 5.5 3.5c1.055 0 2.04.586 2.578 1.5.54.938.54 2.086 0 3A2.97 2.97 0 0 1 5.5 9.5m-1.078 1.125h2.133a4.19 4.19 0 0 1 4.195 4.195c0 .375-.328.68-.703.68H.93a.68.68 0 0 1-.68-.68 4.17 4.17 0 0 1 4.172-4.195' />
    </g>
    <defs>
      <clipPath id='ac958b38f866e148d170d7c0a3f33a8c__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCaptionFillIcon);
export default ForwardRef;
