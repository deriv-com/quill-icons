import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeCaptionFillIcon = (
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
      <path d='M.25 5.375c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 7.625zm1.5.375v1.5h1.5v-1.5zm-1.5 5.625c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 13.625zm1.5.375v1.5h1.5v-1.5zm5.625-7.5h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 6.25 7.625v-2.25c0-.61.492-1.125 1.125-1.125m1.875 1.5h-1.5v1.5h1.5zm-3 4.875c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375 0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375h-1.5a.37.37 0 0 1-.375-.375.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375v1.5c0 .21-.187.375-.375.375h-.75a.37.37 0 0 1-.375-.375zm2.625 4.125a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375 0 .21-.187.375-.375.375m1.5 0a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375 0 .21-.187.375-.375.375' />
    </g>
    <defs>
      <clipPath id='9cc5de6ba77ed3948402e7bbec8e6860__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeCaptionFillIcon);
export default ForwardRef;
