import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineUpDownSmBoldIcon = (
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
        d='M.656 4.625c.401.036.62.255.657.656v9.625c.036.401.255.62.656.656h11.375c.4.037.62.256.656.657-.037.4-.255.62-.656.656H1.969c-.565-.018-1.03-.21-1.395-.574-.364-.365-.556-.83-.574-1.395V5.281c.036-.4.255-.62.656-.656m9.625 2.188c-.4-.037-.62-.256-.656-.657.036-.4.255-.62.656-.656h2.188c.182 0 .337.064.465.191a.633.633 0 0 1 .191.465v2.188c-.037.4-.255.62-.656.656-.401-.036-.62-.255-.656-.656v-.602L8.34 11.215c-.31.255-.62.255-.93 0L5.687 9.492l-1.722 1.723c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l2.188-2.187c.31-.256.62-.256.93 0L7.874 9.82l3.008-3.008zm0 7.437c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.656h.602l-1.285-1.286.93-.93 1.284 1.286v-.602c.037-.4.256-.62.657-.656.4.037.62.255.656.656v2.188a.633.633 0 0 1-.191.465.633.633 0 0 1-.465.191z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownSmBoldIcon);
export default ForwardRef;
