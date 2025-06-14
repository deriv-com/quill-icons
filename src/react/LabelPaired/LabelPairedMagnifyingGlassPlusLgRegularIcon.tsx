import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassPlusLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.125 6.75c-2.46 0-4.727 1.328-5.977 3.438-1.21 2.148-1.21 4.765 0 6.874A6.89 6.89 0 0 0 8.125 20.5a6.87 6.87 0 0 0 5.938-3.437c1.21-2.11 1.21-4.727 0-6.875-1.25-2.11-3.516-3.438-5.938-3.438m0 15A8.12 8.12 0 0 1 0 13.625C0 9.172 3.633 5.5 8.125 5.5c4.453 0 8.125 3.672 8.125 8.125 0 2.031-.742 3.867-1.953 5.313l5.508 5.507a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-5.508-5.547c-1.406 1.25-3.28 1.953-5.273 1.953M7.5 17.375V14.25H4.375a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H7.5V9.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625V13h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H8.75v3.125a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='22987a27b499005206454b464e8cf246__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassPlusLgRegularIcon);
export default ForwardRef;
