import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.5C0 9.703.656 9 1.5 9h18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-18A1.48 1.48 0 0 1 0 10.5M3 18c0-.797.656-1.5 1.5-1.5h12c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-12A1.48 1.48 0 0 1 3 18m10.5 7.5c0 .844-.703 1.5-1.5 1.5H9a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='7871946d1e4e8bac5e1c172a87f84fff__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterXlFillIcon);
export default ForwardRef;
