import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.875 7.273V8.75H5.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H2.875v1.055c0 .68-.187 1.336-.54 1.922l-.022.023H7c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1c-.281 0-.54-.14-.656-.375a.72.72 0 0 1 0-.75l.703-1.172c.21-.351.328-.75.328-1.148V10.25H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.375V7.273c0-1.664 1.336-3.023 3-3.023.328 0 .633.07.96.164l1.9.633a.75.75 0 0 1 .468.96.774.774 0 0 1-.937.47l-1.922-.633a1.5 1.5 0 0 0-.469-.094c-.844 0-1.5.68-1.5 1.523' />
    </g>
    <defs>
      <clipPath id='87dc9f1ee334a37e4ea5e68de04c65ab__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignCaptionFillIcon);
export default ForwardRef;
