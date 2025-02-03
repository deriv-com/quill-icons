import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightXlFillIcon = (
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
      <path d='M16.5 12v10.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-6.844l-9.469 9.422c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l9.423-9.468H4.5A1.48 1.48 0 0 1 3 12c0-.797.656-1.5 1.5-1.5H15c.797 0 1.5.703 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='bd1f348d3cc2ffdb98cf8eed92e23cde__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightXlFillIcon);
export default ForwardRef;
