import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.875 5.063v9.625c0 .738.574 1.312 1.313 1.312h11.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.188A2.16 2.16 0 0 1 0 14.688V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m7.875 0v1.339c.492.11.875.547.875 1.067v2.187c0 .547-.383.985-.875 1.094v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V10.75A1.09 1.09 0 0 1 7 9.656V7.47c0-.52.355-.957.875-1.067V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438M4.813 5.5a.47.47 0 0 1 .437.438v1.339c.492.11.875.547.875 1.067v3.062c0 .547-.383.985-.875 1.094v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V12.5a1.09 1.09 0 0 1-.875-1.094V8.344c0-.52.355-.957.875-1.067V5.938a.45.45 0 0 1 .438-.438M8.75 7.469c0-.11-.11-.219-.219-.219h-.437a.216.216 0 0 0-.219.219v2.187c0 .137.082.219.219.219h.437c.11 0 .219-.082.219-.219zm2.844 2.406a.216.216 0 0 0-.219.219v1.312c0 .137.082.219.219.219h.437c.11 0 .219-.082.219-.219v-1.312c0-.11-.11-.219-.219-.219zM11.375 9V7.688a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v1.339c.492.11.875.547.875 1.067v1.312c0 .547-.383.985-.875 1.094v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V12.5a1.09 1.09 0 0 1-.875-1.094v-1.312c0-.52.355-.957.875-1.067zm-6.344-.875h-.437a.216.216 0 0 0-.219.219v3.062c0 .137.082.219.219.219h.437c.11 0 .219-.082.219-.219V8.344c0-.11-.11-.219-.219-.219' />
    </g>
    <defs>
      <clipPath id='b18b41ab5c03074722e0261193d00f30__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickSmRegularIcon);
export default ForwardRef;
