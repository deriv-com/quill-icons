import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpRightXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m17.25 3v-7.125a1.14 1.14 0 0 0-1.125-1.125h-7.5A1.11 1.11 0 0 0 7.5 13.875c0 .656.469 1.125 1.125 1.125l4.781.047-6.328 6.328a1.027 1.027 0 0 0 0 1.547c.422.469 1.125.469 1.594 0L15 16.594V21c0 .656.469 1.125 1.125 1.125A1.11 1.11 0 0 0 17.25 21' />
    </g>
    <defs>
      <clipPath id='50a3be1bf2bd173921d6bf80f89c029a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpRightXlFillIcon);
export default ForwardRef;
