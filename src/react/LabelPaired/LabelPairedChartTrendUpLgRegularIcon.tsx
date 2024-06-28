import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpLgRegularIcon = (
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
      <path d='M24.023 6.203c.313.156.43.547.274.86l-3.75 7.5a.62.62 0 0 1-.547.312h-5.898l-4.805 9.688a.64.64 0 0 1-.86.273l-7.5-3.75a.64.64 0 0 1-.273-.86.64.64 0 0 1 .86-.273l6.914 3.477 4.726-9.453c.117-.196.313-.352.586-.352h5.86l3.554-7.148a.64.64 0 0 1 .86-.274' />
    </g>
    <defs>
      <clipPath id='b15c92e32d45634f996c47d7adecfa09__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpLgRegularIcon);
export default ForwardRef;
