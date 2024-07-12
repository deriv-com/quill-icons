import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchCaptionRegularIcon = (
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
      <path d='M9 8.375c0-1.453-.797-2.812-2.062-3.562a4.18 4.18 0 0 0-4.125 0A4.12 4.12 0 0 0 .75 8.375c0 1.477.773 2.836 2.063 3.586a4.18 4.18 0 0 0 4.124 0A4.18 4.18 0 0 0 9 8.375m-.96 3.703c-.845.75-1.97 1.172-3.165 1.172A4.87 4.87 0 0 1 0 8.375C0 5.703 2.18 3.5 4.875 3.5c2.672 0 4.875 2.203 4.875 4.875 0 1.219-.445 2.32-1.172 3.188l3.305 3.304c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0z' />
    </g>
    <defs>
      <clipPath id='285c563d80f08ddcc4fc38dd2ef44e4f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchCaptionRegularIcon);
export default ForwardRef;
