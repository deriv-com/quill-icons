import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockLgBoldIcon = (
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
      <path d='M0 7.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v13.75c0 .546.39.937.938.937h10.156c.234.703.625 1.328 1.094 1.875H2.813A2.8 2.8 0 0 1 0 21.438zm4.336 7.187L7.46 11.75c.351-.39.937-.39 1.328 0l2.461 2.46c1.406-1.444 2.852-2.89 4.297-4.335h-.86c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h3.124c.235 0 .47.117.665.273.156.196.273.43.273.665v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-.86l-4.96 4.961c-.392.39-.977.39-1.33 0l-2.46-2.46-2.46 2.46c-.392.39-.977.39-1.33 0a.856.856 0 0 1 0-1.289m9.414 5c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m5-2.5v2.5c0 .352.273.625.625.625h1.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H20v-1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625' />
    </g>
    <defs>
      <clipPath id='4a0443a6291ccf1596f8c131c6f84803__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockLgBoldIcon);
export default ForwardRef;
