import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.688 7.719-10 10a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407l10-10a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.407M4 8c0 .719-.406 1.375-1 1.75-.625.344-1.406.344-2 0A2.03 2.03 0 0 1 0 8a2.02 2.02 0 0 1 1-1.719c.594-.343 1.375-.343 2 0C3.594 6.656 4 7.313 4 8m8 8c0 .719-.406 1.375-1 1.75-.625.344-1.406.344-2 0A2.03 2.03 0 0 1 8 16a2.02 2.02 0 0 1 1-1.719c.594-.344 1.375-.344 2 0 .594.375 1 1.031 1 1.719' />
    </g>
    <defs>
      <clipPath id='a825a6731e7e80e0cb9c3c72cce14809__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentMdFillIcon);
export default ForwardRef;
