import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftXlFillIcon = (
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
      <path d='M3 10.5h10.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H6.61l9.421 9.469c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L4.5 15.655V22.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V12c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='91dad7cb0ee530069e8e27eed38336d4__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftXlFillIcon);
export default ForwardRef;
