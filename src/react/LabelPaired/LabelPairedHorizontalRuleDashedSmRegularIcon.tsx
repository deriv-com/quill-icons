import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 10.75a.45.45 0 0 1 .438-.437h2.187a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438H.688a.43.43 0 0 1-.438-.438m4.813 0a.45.45 0 0 1 .437-.437h2.188a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H5.5a.43.43 0 0 1-.437-.438m4.812 0a.45.45 0 0 1 .438-.437H12.5a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438h-2.187a.43.43 0 0 1-.438-.438m4.813 0a.45.45 0 0 1 .437-.437h2.188a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-2.188a.43.43 0 0 1-.437-.438' />
    </g>
    <defs>
      <clipPath id='3b8a29e5331b6c0e676f9f92061d3b68__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedSmRegularIcon);
export default ForwardRef;
