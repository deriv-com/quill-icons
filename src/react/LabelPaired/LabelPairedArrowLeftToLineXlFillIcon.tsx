import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineXlFillIcon = (
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
      <path d='M0 10.5C0 9.703.656 9 1.5 9c.797 0 1.5.703 1.5 1.5v15c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 0 25.5zm6.422 8.578a1.445 1.445 0 0 1 0-2.11l6-6a1.445 1.445 0 0 1 2.11 0c.609.563.609 1.548 0 2.11L11.108 16.5H19.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-8.39l3.421 3.469c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0z' />
    </g>
    <defs>
      <clipPath id='fe5e1b2646bf5beadb24a5315ad2b412__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineXlFillIcon);
export default ForwardRef;
