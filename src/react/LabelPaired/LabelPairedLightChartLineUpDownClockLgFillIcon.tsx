import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockLgFillIcon = (
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
      <path d='M0 8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v13.125c0 .352.273.625.625.625h9.61c.273.938.703 1.797 1.328 2.5H3.124C1.367 24.25 0 22.883 0 21.125zm4.102 6.64 3.125-3.124a1.205 1.205 0 0 1 1.757 0l2.266 2.226 3.477-3.476-.743-.743a.89.89 0 0 1-.234-.625c0-.468.39-.898.86-.898h3.515c.313 0 .625.313.625.625v3.515c0 .47-.43.86-.898.86a.89.89 0 0 1-.625-.234l-.743-.743-4.375 4.375a1.205 1.205 0 0 1-1.757 0l-2.227-2.226-2.266 2.226a1.205 1.205 0 0 1-1.757 0 1.205 1.205 0 0 1 0-1.757m9.648 5.235c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m5-2.5v2.5c0 .352.273.625.625.625h1.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H20v-1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625' />
    </g>
    <defs>
      <clipPath id='8b010e4b15ce5cfdc72c2a8dcfdcd7a5__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockLgFillIcon);
export default ForwardRef;
