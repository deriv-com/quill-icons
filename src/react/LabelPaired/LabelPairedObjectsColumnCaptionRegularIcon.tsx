import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnCaptionRegularIcon = (
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
      <path d='M1.375 5A.385.385 0 0 0 1 5.375v3.75c0 .21.164.375.375.375h2.25A.385.385 0 0 0 4 9.125v-3.75A.4.4 0 0 0 3.625 5zM.25 5.375c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 9.125zM7.375 9.5A.385.385 0 0 0 7 9.875v3.75c0 .21.164.375.375.375h2.25a.385.385 0 0 0 .375-.375v-3.75a.4.4 0 0 0-.375-.375zm-1.125.375c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125h-2.25a1.11 1.11 0 0 1-1.125-1.125zM3.625 11.75h-2.25a.385.385 0 0 0-.375.375v1.5c0 .21.164.375.375.375h2.25A.385.385 0 0 0 4 13.625v-1.5a.4.4 0 0 0-.375-.375M1.375 11h2.25c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 13.625v-1.5C.25 11.515.742 11 1.375 11m6-6A.385.385 0 0 0 7 5.375v1.5c0 .21.164.375.375.375h2.25A.385.385 0 0 0 10 6.875v-1.5A.4.4 0 0 0 9.625 5zm-1.125.375c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v1.5C10.75 7.508 10.234 8 9.625 8h-2.25A1.11 1.11 0 0 1 6.25 6.875z' />
    </g>
    <defs>
      <clipPath id='aa84b815694abee53d0bd2cb1c46eb69__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnCaptionRegularIcon);
export default ForwardRef;
