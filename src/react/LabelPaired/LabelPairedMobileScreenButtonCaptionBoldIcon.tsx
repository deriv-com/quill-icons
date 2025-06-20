import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonCaptionBoldIcon = (
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
      <path d='M1.5 14c0 .21.164.375.375.375h5.25A.385.385 0 0 0 7.5 14v-1.875h-6zm0-3h6V5a.4.4 0 0 0-.375-.375h-5.25A.385.385 0 0 0 1.5 5zM.375 5c0-.82.656-1.5 1.5-1.5h5.25c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-5.25a1.48 1.48 0 0 1-1.5-1.5zm3.375 7.875h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.5a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='e224e4397df0243ca5d5539e91fde55d__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonCaptionBoldIcon);
export default ForwardRef;
