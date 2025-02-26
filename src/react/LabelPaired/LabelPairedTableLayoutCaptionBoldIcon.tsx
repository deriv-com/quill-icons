import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutCaptionBoldIcon = (
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
      <path d='M10.5 5.375h-9a.385.385 0 0 0-.375.375v1.5h9.75v-1.5a.4.4 0 0 0-.375-.375M1.125 13.25c0 .21.164.375.375.375h1.875v-5.25h-2.25zm3.375.375h6a.385.385 0 0 0 .375-.375V8.375H4.5zm-3-9.375h9c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='782de1dcddea50ba4cc973a982f4dcd5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutCaptionBoldIcon);
export default ForwardRef;
