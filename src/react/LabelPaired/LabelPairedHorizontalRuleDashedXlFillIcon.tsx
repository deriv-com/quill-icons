import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 18c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 0 18m7.969 0c0-.797.703-1.5 1.5-1.5h3c.844 0 1.5.703 1.5 1.5 0 .844-.656 1.5-1.5 1.5h-3a1.51 1.51 0 0 1-1.5-1.5m8.015 0c0-.797.657-1.5 1.5-1.5h3c.844 0 1.5.703 1.5 1.5 0 .844-.656 1.5-1.5 1.5h-3a1.48 1.48 0 0 1-1.5-1.5M24 18c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 24 18' />
    </g>
    <defs>
      <clipPath id='2f7810bfde6fa5089eded7b9174121fd__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedXlFillIcon);
export default ForwardRef;
