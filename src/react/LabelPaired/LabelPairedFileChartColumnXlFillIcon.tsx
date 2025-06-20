import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnXlFillIcon = (
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
      <path d='M3 6h7.5v6c0 .844.656 1.5 1.5 1.5h6V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m9 0 6 6h-6zm-1.875 11.625A1.14 1.14 0 0 0 9 16.5a1.11 1.11 0 0 0-1.125 1.125v8.25C7.875 26.531 8.344 27 9 27a1.11 1.11 0 0 0 1.125-1.125zm4.125 3a1.14 1.14 0 0 0-1.125-1.125A1.11 1.11 0 0 0 12 20.625v5.25c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125zm-8.25 3A1.14 1.14 0 0 0 4.875 22.5a1.11 1.11 0 0 0-1.125 1.125v2.25c0 .656.469 1.125 1.125 1.125A1.11 1.11 0 0 0 6 25.875z' />
    </g>
    <defs>
      <clipPath id='01abeea491e8aaf604075313a6bcef86__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnXlFillIcon);
export default ForwardRef;
