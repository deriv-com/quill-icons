import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleBookmarkCaptionRegularIcon = (
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
      <path d='M6 4.25a5.24 5.24 0 0 0-4.547 2.625 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25A5.23 5.23 0 0 0 6 4.25M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3M4.5 7.625v3.727l1.266-1.008c.117-.117.328-.117.468 0L7.5 11.352V7.625a.4.4 0 0 0-.375-.375h-2.25a.385.385 0 0 0-.375.375M4.875 6.5h2.25c.61 0 1.125.516 1.125 1.125v4.5c0 .164-.094.281-.234.352a.32.32 0 0 1-.375-.047L6 11.117 4.36 12.43a.41.41 0 0 1-.4.047.36.36 0 0 1-.21-.352v-4.5c0-.61.492-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='21a3ad0b65a612d7993e0671243b9b03__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkCaptionRegularIcon);
export default ForwardRef;
