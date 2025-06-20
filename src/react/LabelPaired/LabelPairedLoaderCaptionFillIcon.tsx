import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderCaptionFillIcon = (
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
      <path d='M6.75 4.25v1.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m0 9v1.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75M0 9.5c0-.398.328-.75.75-.75h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 9.5m9.75-.75h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-1.5A.74.74 0 0 1 9 9.5c0-.398.328-.75.75-.75M1.758 5.258c.281-.281.75-.281 1.055 0l1.054 1.078a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0L1.758 6.336a.75.75 0 0 1 0-1.078m7.406 6.375 1.078 1.055c.281.304.281.773 0 1.054a.75.75 0 0 1-1.078 0L8.11 12.687a.765.765 0 0 1 0-1.054c.305-.305.774-.305 1.055 0m-7.406 2.11v.023a.75.75 0 0 1 0-1.078l1.055-1.055a.723.723 0 0 1 1.054 0 .723.723 0 0 1 0 1.055l-1.054 1.054c-.305.305-.774.305-1.055 0m6.351-7.407 1.055-1.078a.794.794 0 0 1 1.078 0 .794.794 0 0 1 0 1.078L9.164 7.39c-.281.28-.75.28-1.055 0-.28-.305-.28-.774 0-1.055' />
    </g>
    <defs>
      <clipPath id='60592387f0003c81300625bd7c348ab7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderCaptionFillIcon);
export default ForwardRef;
