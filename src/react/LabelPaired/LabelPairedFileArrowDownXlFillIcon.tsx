import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownXlFillIcon = (
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
      <path d='M3 6h7.5v6c0 .844.656 1.5 1.5 1.5h6V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m9 0 6 6h-6zm-1.875 10.875h-.047a1.11 1.11 0 0 0-1.125-1.125 1.14 1.14 0 0 0-1.125 1.125v4.828L6.375 20.25a1.026 1.026 0 0 0-1.547 0 1.027 1.027 0 0 0 0 1.547l3.375 3.375a1.027 1.027 0 0 0 1.547 0l3.375-3.375a1.027 1.027 0 0 0 0-1.547 1.027 1.027 0 0 0-1.547 0l-1.453 1.453z' />
    </g>
    <defs>
      <clipPath id='06f35be8a7c2827bc3dbf5c4a137cf6e__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownXlFillIcon);
export default ForwardRef;
