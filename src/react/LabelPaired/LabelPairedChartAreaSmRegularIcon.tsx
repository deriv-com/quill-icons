import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartAreaSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.875 5.063v9.625c.018.364.146.674.383.93.255.236.565.364.93.382h11.374c.274.018.42.164.438.438-.018.273-.164.419-.438.437H2.188c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558V5.062c.018-.273.164-.419.438-.437.273.018.419.164.437.438Zm7.246 4.566L6.125 7.605l-2.488 2.516a.364.364 0 0 0-.137.3v2.954h8.75v-2.57a.47.47 0 0 0-.11-.301l-1.695-1.969L9.38 9.63a.913.913 0 0 1-.629.246.913.913 0 0 1-.629-.246Zm0-1.258L8.75 9l.629-.629.465-.465a.913.913 0 0 1 .629-.246.9.9 0 0 1 .629.3l1.695 1.997c.219.237.328.52.328.848v2.57a.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246H3.5a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629v-2.953c0-.365.128-.675.383-.93l2.488-2.488a.864.864 0 0 1 .629-.274c.237 0 .447.092.629.274L8.12 8.37Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaSmRegularIcon);
export default ForwardRef;
