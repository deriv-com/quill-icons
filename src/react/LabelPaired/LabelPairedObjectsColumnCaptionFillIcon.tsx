import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnCaptionFillIcon = (
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
      <path d='M1.375 4.25h2.25c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 9.125v-3.75c0-.61.492-1.125 1.125-1.125m6 4.5h2.25c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125h-2.25a1.11 1.11 0 0 1-1.125-1.125v-3.75c0-.61.492-1.125 1.125-1.125M.25 12.875c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v.75c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 13.625zM7.375 4.25h2.25c.61 0 1.125.516 1.125 1.125v.75c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 6.25 6.125v-.75c0-.61.492-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='bc3b82fae21ff2dafb26868ac9299ddf__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnCaptionFillIcon);
export default ForwardRef;
