import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.656 10.5c-.984 0-1.968.422-2.672 1.125l-1.453 1.453c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l1.454-1.452C3.141 8.25 4.875 7.5 6.656 7.5a6.82 6.82 0 0 1 6.844 6.844c0 1.781-.75 3.515-2.016 4.781L5.11 25.5H13.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-12c-.61 0-1.172-.328-1.406-.89a1.52 1.52 0 0 1 .328-1.641l8.953-8.953c.703-.703 1.125-1.688 1.125-2.672A3.86 3.86 0 0 0 6.656 10.5' />
    </g>
    <defs>
      <clipPath id='4b538616534c5ff050bd58cbbc6dcaea__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoXlFillIcon);
export default ForwardRef;
