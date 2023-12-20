import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPhoneCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.813 9.945 2.624 1.125c.204.094.36.242.47.446a.958.958 0 0 1 .07.632l-.563 2.625c-.125.454-.43.696-.914.727h-.422l-.703-.047c-1.781-.219-3.375-.805-4.781-1.758a10.52 10.52 0 0 1-3.328-3.703C.438 8.492.016 6.828 0 5c.031-.484.281-.79.75-.914l2.625-.563a.826.826 0 0 1 .61.094.884.884 0 0 1 .445.446l1.125 2.625c.156.421.062.789-.282 1.101l-.937.774a7.162 7.162 0 0 0 2.601 2.601l.774-.937c.312-.344.68-.438 1.101-.282m1.546 4.43.493-2.32-2.344-1.008-.703.844a1.172 1.172 0 0 1-.657.375 1.042 1.042 0 0 1-.773-.118 8.494 8.494 0 0 1-3.023-3.023 1.183 1.183 0 0 1 .258-1.43l.843-.68-1.008-2.367-2.32.516c.047 1.703.484 3.242 1.313 4.617a9.173 9.173 0 0 0 3.28 3.281c1.376.829 2.923 1.266 4.641 1.313'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneCaptionBoldIcon);
export default ForwardRef;
