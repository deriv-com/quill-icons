import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownSmFillIcon = (
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
      <path d='M1.75 5.5v9.188c0 .246.191.437.438.437h10.937A.9.9 0 0 1 14 16c0 .492-.41.875-.875.875H2.188A2.16 2.16 0 0 1 0 14.688V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m8.559 1.586-.52-.52a.62.62 0 0 1-.164-.437c0-.328.273-.629.602-.629h2.46a.47.47 0 0 1 .438.438v2.46c0 .329-.3.602-.629.602a.62.62 0 0 1-.437-.164l-.52-.52-3.062 3.063a.843.843 0 0 1-1.23 0L5.686 9.82 4.103 11.38a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L5.058 7.96a.843.843 0 0 1 1.23 0L7.875 9.52zm1.75 3.855a.65.65 0 0 1 .437-.191c.356 0 .629.3.629.629v2.434a.45.45 0 0 1-.437.437h-2.461a.607.607 0 0 1-.602-.602c0-.164.055-.328.164-.437l.52-.52-.957-.957 1.257-1.23.93.957z' />
    </g>
    <defs>
      <clipPath id='d45893b739fe110d8f93433998ae8006__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownSmFillIcon);
export default ForwardRef;
