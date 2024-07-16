import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.531 7.969 4.5 4.5c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L9 12.655V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 6 27V12.656l-1.969 1.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l4.5-4.5a1.445 1.445 0 0 1 2.11 0m16.5 15.61-4.5 4.5c-.562.608-1.547.608-2.11 0l-4.5-4.5a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L18 23.39V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v14.39l1.922-1.921a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11' />
    </g>
    <defs>
      <clipPath id='e597507d4c9f2f9866ffe96a0933d4d3__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownXlFillIcon);
export default ForwardRef;
