import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendSidewayLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.313 15.5c0-.508.39-.937.937-.937h22.5a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938H1.25c-.547 0-.937-.391-.937-.938' />
    </g>
    <defs>
      <clipPath id='fac6e3aaac8fdff3e44b57ab5ad293e9__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendSidewayLgBoldIcon);
export default ForwardRef;
