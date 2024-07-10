import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketXlFillIcon = (
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
      <path d='m11.531 6.469 6 6c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L12 11.155V21c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 9 21v-9.844l-3.469 3.422c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l6-6a1.445 1.445 0 0 1 2.11 0M3 22.5v3c0 .844.656 1.5 1.5 1.5h12c.797 0 1.5-.656 1.5-1.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v3c0 2.484-2.016 4.5-4.5 4.5h-12A4.5 4.5 0 0 1 0 25.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5' />
    </g>
    <defs>
      <clipPath id='c81e2e22ee650d9c942be79417edfca9__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketXlFillIcon);
export default ForwardRef;
