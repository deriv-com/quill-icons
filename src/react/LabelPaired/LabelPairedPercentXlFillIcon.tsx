import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentXlFillIcon = (
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
      <path d='m17.531 11.578-15 15c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l15-15a1.445 1.445 0 0 1 2.11 0c.61.563.61 1.548 0 2.11M6 12c0 1.078-.61 2.063-1.5 2.625-.937.516-2.11.516-3 0A3.05 3.05 0 0 1 0 12c0-1.031.563-2.016 1.5-2.578.89-.516 2.063-.516 3 0C5.39 9.984 6 10.969 6 12m12 12c0 1.078-.61 2.063-1.5 2.625-.937.516-2.11.516-3 0A3.05 3.05 0 0 1 12 24c0-1.031.563-2.016 1.5-2.578.89-.516 2.063-.516 3 0 .89.562 1.5 1.547 1.5 2.578' />
    </g>
    <defs>
      <clipPath id='43829364fd2c2cecbf77c9a93780cb7a__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentXlFillIcon);
export default ForwardRef;
