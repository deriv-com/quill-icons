import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourCaptionFillIcon = (
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
      <path d='m4.43 5.328-2.508 5.297H6V7.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75v3.375h.75c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H7.5V14c0 .422-.352.75-.75.75A.74.74 0 0 1 6 14v-1.875H.75a.79.79 0 0 1-.656-.328c-.117-.235-.14-.492-.024-.727l3-6.375c.164-.375.61-.539.985-.375.375.188.539.633.375 1.008' />
    </g>
    <defs>
      <clipPath id='2978b50031138b3c50a63000623324c6__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourCaptionFillIcon);
export default ForwardRef;
