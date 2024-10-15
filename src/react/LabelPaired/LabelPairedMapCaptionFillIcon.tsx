import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapCaptionFillIcon = (
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
      <path d='m9.25 14.68-4.5-1.29V4.345l4.5 1.289zm.75-.047V5.586l2.977-1.195c.351-.141.773.117.773.515v7.852c0 .234-.14.445-.375.515zM.602 5.75 4 4.39v9.048l-3 1.195a.55.55 0 0 1-.75-.516V6.266c0-.235.14-.446.352-.516' />
    </g>
    <defs>
      <clipPath id='54cda583844774a0de2ca4752eb70fe2__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapCaptionFillIcon);
export default ForwardRef;
