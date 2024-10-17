import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 7.5H6v3H4.5c-.844 0-1.5.703-1.5 1.5v1.5H0V12c0-2.484 2.016-4.5 4.5-4.5M0 15h3v6H0zm18 0h3v6h-3zm3-1.5h-3V12c0-.797-.703-1.5-1.5-1.5H15v-3h1.5c2.484 0 4.5 2.016 4.5 4.5zm0 9V24c0 2.484-2.016 4.5-4.5 4.5H15v-3h1.5c.797 0 1.5-.656 1.5-1.5v-1.5zm-18 0V24c0 .844.656 1.5 1.5 1.5H6v3H4.5A4.5 4.5 0 0 1 0 24v-1.5zm4.5 6v-3h6v3zm0-18v-3h6v3z' />
    </g>
    <defs>
      <clipPath id='929931f51f4da4163d23e6f3054f10d8__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderXlFillIcon);
export default ForwardRef;
