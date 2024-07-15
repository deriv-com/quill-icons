import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchCaptionFillIcon = (
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
      <path d='M3 5h-.75a.385.385 0 0 0-.375.375v8.25c0 .21.164.375.375.375h4.5a.385.385 0 0 0 .375-.375v-8.25A.4.4 0 0 0 6.75 5H6v.375c0 .21-.187.375-.375.375h-2.25A.37.37 0 0 1 3 5.375zm-.75-1.5h4.5a1.88 1.88 0 0 1 1.875 1.875v8.25A1.866 1.866 0 0 1 6.75 15.5h-4.5a1.85 1.85 0 0 1-1.875-1.875v-8.25c0-1.031.82-1.875 1.875-1.875M3 12.875c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-2.25A.37.37 0 0 1 3 12.875' />
    </g>
    <defs>
      <clipPath id='f65697bbed93ee9b02efc28da17e5edf__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchCaptionFillIcon);
export default ForwardRef;
