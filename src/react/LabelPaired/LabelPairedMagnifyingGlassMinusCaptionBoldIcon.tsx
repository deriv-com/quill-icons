import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassMinusCaptionBoldIcon = (
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
      <path d='M4.875 4.625A3.78 3.78 0 0 0 1.617 6.5a3.7 3.7 0 0 0 0 3.75 3.73 3.73 0 0 0 3.258 1.875 3.72 3.72 0 0 0 3.234-1.875 3.7 3.7 0 0 0 0-3.75c-.68-1.148-1.898-1.875-3.234-1.875m0 8.625A4.87 4.87 0 0 1 0 8.375C0 5.703 2.18 3.5 4.875 3.5c2.672 0 4.875 2.203 4.875 4.875a4.95 4.95 0 0 1-1.055 3.047l3.117 3.14a.513.513 0 0 1 0 .774.513.513 0 0 1-.773 0L7.9 12.219a4.9 4.9 0 0 1-3.024 1.031M3.188 7.813h3.375a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563H3.188a.54.54 0 0 1-.563-.563c0-.305.234-.562.563-.562' />
    </g>
    <defs>
      <clipPath id='e8784735f7ebddc6775d972f79955b9a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassMinusCaptionBoldIcon);
export default ForwardRef;
