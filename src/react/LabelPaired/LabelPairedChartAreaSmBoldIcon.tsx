import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartAreaSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.313 5.281v9.625c.036.401.255.62.656.656h11.375c.4.037.62.256.656.657-.037.4-.255.62-.656.656H1.969c-.565-.018-1.03-.21-1.395-.574-.364-.365-.556-.83-.574-1.395V5.281c.036-.4.255-.62.656-.656.401.036.62.255.657.656M7.82 9.93 6.125 8.234l-2.187 2.188v2.515h7.874v-2.132L10.419 9.19l-.738.739a1.266 1.266 0 0 1-.93.383c-.365 0-.674-.128-.93-.383M8.75 9l.93-.93.164-.164a.913.913 0 0 1 .629-.246.9.9 0 0 1 .629.3l1.695 1.997c.219.237.328.52.328.848v2.57a.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246H3.5a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629v-2.953c0-.365.128-.675.383-.93l2.488-2.488a.864.864 0 0 1 .629-.274c.237 0 .447.092.629.274L7.82 8.07z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaSmBoldIcon);
export default ForwardRef;
