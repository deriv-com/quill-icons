import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.438 9.5c0-.469.234-.89.656-1.125a1.313 1.313 0 1 1 0 2.273C.672 10.414.437 9.992.437 9.5m3.75 0c0-.469.234-.89.656-1.125a1.313 1.313 0 1 1 0 2.273c-.422-.234-.657-.656-.657-1.148M9.25 8.188a1.312 1.312 0 0 1 1.125 1.969 1.26 1.26 0 0 1-1.125.656c-.492 0-.914-.235-1.148-.657A1.313 1.313 0 0 1 9.25 8.187' />
    </g>
    <defs>
      <clipPath id='89761037d8386bf6c32b5f397da72708__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisCaptionFillIcon);
export default ForwardRef;
