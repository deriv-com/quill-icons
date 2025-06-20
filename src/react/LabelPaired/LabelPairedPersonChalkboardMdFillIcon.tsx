import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 7a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5C4.968 4.313 5.438 4 6 4c.531 0 1 .313 1.281.75.282.469.282 1.063 0 1.5C7 6.719 6.531 7 6 7m-.25 12c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-6.969l-.906 1.5a1.01 1.01 0 0 1-1.375.344 1.01 1.01 0 0 1-.344-1.375l1.813-3.031C3.5 8.563 4.468 8 5.53 8H10V5.5A1.5 1.5 0 0 1 11.5 4h7c.813 0 1.5.688 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-7a1.48 1.48 0 0 1-1.5-1.5V11h2v1h6V6h-6v2h.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1H8.25v9c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-4h-.5z' />
    </g>
    <defs>
      <clipPath id='6ff41afd4fe3831b4b0c834ff57a2971__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardMdFillIcon);
export default ForwardRef;
