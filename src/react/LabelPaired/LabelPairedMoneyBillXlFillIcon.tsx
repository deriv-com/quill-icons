import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9h21c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V12c0-1.64 1.313-3 3-3m3 15c0-1.64-1.36-3-3-3v3zm-3-9c1.64 0 3-1.312 3-3H3zm18 9h3v-3c-1.687 0-3 1.36-3 3m3-9v-3h-3c0 1.688 1.313 3 3 3m-10.5-1.5c-1.64 0-3.094.89-3.937 2.25-.797 1.406-.797 3.14 0 4.5.843 1.406 2.296 2.25 3.937 2.25 1.594 0 3.047-.844 3.89-2.25.797-1.36.797-3.094 0-4.5-.843-1.36-2.296-2.25-3.89-2.25' />
    </g>
    <defs>
      <clipPath id='58f2bcb1b07c07d91f22684251c82e21__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillXlFillIcon);
export default ForwardRef;
