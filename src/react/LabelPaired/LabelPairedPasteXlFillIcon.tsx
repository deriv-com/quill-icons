import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteXlFillIcon = (
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
      <path d='M7.5 6c1.078 0 2.063.61 2.578 1.5h2.672C13.969 7.5 15 8.531 15 9.75v.75h-2.25A3.73 3.73 0 0 0 9 14.25V27H2.25A2.22 2.22 0 0 1 0 24.75v-15A2.25 2.25 0 0 1 2.25 7.5h2.625C5.391 6.61 6.375 6 7.5 6m5.25 6h5.813c.562 0 1.171.281 1.593.703l3.14 3.14c.423.423.704 1.032.704 1.595V27.75A2.25 2.25 0 0 1 21.75 30h-9a2.22 2.22 0 0 1-2.25-2.25v-13.5A2.25 2.25 0 0 1 12.75 12M7.5 7.875A1.11 1.11 0 0 0 6.375 9c0 .656.469 1.125 1.125 1.125A1.11 1.11 0 0 0 8.625 9 1.14 1.14 0 0 0 7.5 7.875' />
    </g>
    <defs>
      <clipPath id='7701ed52a61e409b280d1dd5316f8c76__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteXlFillIcon);
export default ForwardRef;
