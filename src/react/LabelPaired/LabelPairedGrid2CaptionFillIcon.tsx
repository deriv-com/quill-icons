import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2CaptionFillIcon = (
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
      <path d='M5.25 5.375v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .75 7.625v-2.25c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125m0 6v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .75 13.625v-2.25c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125m1.5-6c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 6.75 7.625zm4.5 6v2.25c0 .633-.516 1.125-1.125 1.125h-2.25a1.11 1.11 0 0 1-1.125-1.125v-2.25c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='deb7f2526e76bb9ecb95306b3fd23597__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2CaptionFillIcon);
export default ForwardRef;
