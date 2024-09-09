import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapCaptionRegularIcon = (
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
      <path d='M4.234 4.297a.28.28 0 0 1 .235-.024L9.602 5.75l3.375-1.36c.351-.14.773.118.773.516v7.852c0 .234-.14.445-.375.515l-3.633 1.454c-.07.046-.14.046-.234.023l-5.133-1.477L1 14.633a.55.55 0 0 1-.75-.516V6.266c0-.235.14-.446.352-.516zM1 6.383v7.453l3-1.195V5.188zm8.25 7.5V6.43l-4.5-1.29v7.454zm.75-.047 3-1.195V5.188l-3 1.195z' />
    </g>
    <defs>
      <clipPath id='70b72fd787c2155bd88aebc11af39d7e__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapCaptionRegularIcon);
export default ForwardRef;
