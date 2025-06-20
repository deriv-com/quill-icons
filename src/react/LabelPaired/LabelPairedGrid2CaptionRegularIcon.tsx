import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2CaptionRegularIcon = (
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
      <path d='M1.875 5a.385.385 0 0 0-.375.375v2.25c0 .21.164.375.375.375h2.25a.385.385 0 0 0 .375-.375v-2.25A.4.4 0 0 0 4.125 5zM.75 5.375c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .75 7.625zM1.875 11a.385.385 0 0 0-.375.375v2.25c0 .21.164.375.375.375h2.25a.385.385 0 0 0 .375-.375v-2.25A.4.4 0 0 0 4.125 11zm-1.125.375c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .75 13.625zM10.125 5h-2.25a.385.385 0 0 0-.375.375v2.25c0 .21.164.375.375.375h2.25a.385.385 0 0 0 .375-.375v-2.25A.4.4 0 0 0 10.125 5m-2.25-.75h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 6.75 7.625v-2.25c0-.61.492-1.125 1.125-1.125m0 6.75a.385.385 0 0 0-.375.375v2.25c0 .21.164.375.375.375h2.25a.385.385 0 0 0 .375-.375v-2.25a.4.4 0 0 0-.375-.375zm-1.125.375c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25a1.11 1.11 0 0 1-1.125-1.125z' />
    </g>
    <defs>
      <clipPath id='b271b65ae3fcc920f2ca7d8bf402e3ec__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2CaptionRegularIcon);
export default ForwardRef;
