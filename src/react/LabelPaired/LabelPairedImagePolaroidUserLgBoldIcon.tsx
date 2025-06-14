import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 21.75c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625v-1.875H2.125zM13.297 18h2.578V9.25c0-.312-.312-.625-.625-.625H2.75a.64.64 0 0 0-.625.625V18h2.578a2.52 2.52 0 0 1 2.422-1.875h3.75c1.133 0 2.11.82 2.422 1.875m4.453-8.75v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5M6.5 12.375c0-.86.469-1.68 1.25-2.148.742-.43 1.719-.43 2.5 0 .742.468 1.25 1.289 1.25 2.148 0 .898-.508 1.719-1.25 2.188-.781.43-1.758.43-2.5 0a2.54 2.54 0 0 1-1.25-2.188' />
    </g>
    <defs>
      <clipPath id='61aeeff400fbc7d7fd53c5c62f9fa824__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserLgBoldIcon);
export default ForwardRef;
