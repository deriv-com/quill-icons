import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleXlFillIcon = (
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
      <path d='M0 18c0-.797.656-1.5 1.5-1.5h27c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-27A1.48 1.48 0 0 1 0 18' />
    </g>
    <defs>
      <clipPath id='7060b600779c33cd048dc5dc88bab7e6__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleXlFillIcon);
export default ForwardRef;
