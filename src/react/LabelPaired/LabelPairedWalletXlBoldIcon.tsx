import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletXlBoldIcon = (
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
      <path d='M4.125 7.5h17.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H4.125a1.85 1.85 0 0 0-1.875 1.875v12.75c0 1.078.797 1.875 1.875 1.875h15.75a1.85 1.85 0 0 0 1.875-1.875v-8.25a1.88 1.88 0 0 0-1.875-1.875H5.625c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h14.25C22.125 12 24 13.875 24 16.125v8.25a4.13 4.13 0 0 1-4.125 4.125H4.125A4.1 4.1 0 0 1 0 24.375v-12.75A4.13 4.13 0 0 1 4.125 7.5M18 21.75a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5' />
    </g>
    <defs>
      <clipPath id='1a88508d40d119b20f55421857ac9662__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletXlBoldIcon);
export default ForwardRef;
