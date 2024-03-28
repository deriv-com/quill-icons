import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftXlFillIcon = (
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
      <path d='M1.5 24V13.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v6.89l9.422-9.421a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11L6.608 22.5H13.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3A1.48 1.48 0 0 1 1.5 24' />
    </g>
    <defs>
      <clipPath id='e9045dd58ab5cbacb2f3fde8cf8f2378__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftXlFillIcon);
export default ForwardRef;
