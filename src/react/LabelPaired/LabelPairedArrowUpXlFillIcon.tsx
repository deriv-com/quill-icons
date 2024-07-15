import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.031 7.969 7.5 7.5c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L10.5 12.655V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 7.5 27V12.656l-4.969 4.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l7.5-7.5a1.445 1.445 0 0 1 2.11 0' />
    </g>
    <defs>
      <clipPath id='dce7bcce5c292126de20616490826633__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpXlFillIcon);
export default ForwardRef;
