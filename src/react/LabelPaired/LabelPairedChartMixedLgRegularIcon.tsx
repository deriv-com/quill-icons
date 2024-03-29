import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.805 6.984a.58.58 0 0 1-.04.86l-6.874 6.25a.613.613 0 0 1-.86 0l-4.61-4.649-6.444 4.688a.584.584 0 0 1-.86-.117c-.234-.274-.156-.664.117-.899l6.875-5c.235-.156.586-.117.82.078l4.571 4.57 6.445-5.82a.58.58 0 0 1 .86.04M3.125 22.375v-2.5c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625M2.5 18c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-2.5C.625 18.859 1.445 18 2.5 18m5.625-1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625zm-2.5 0c0-1.016.82-1.875 1.875-1.875 1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875zm7.5 6.25v-3.75c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625M12.5 16.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875v-3.75c0-1.016.82-1.875 1.875-1.875m5.625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625zm-2.5 0c0-1.016.82-1.875 1.875-1.875 1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875z' />
    </g>
    <defs>
      <clipPath id='8250d32b8e334fe073868947cbfbcdd9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedLgRegularIcon);
export default ForwardRef;
