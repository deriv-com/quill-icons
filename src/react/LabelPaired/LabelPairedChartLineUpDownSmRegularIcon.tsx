import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineUpDownSmRegularIcon = (
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
        d='M.875 5.063v9.625c.018.364.146.674.383.93.255.236.565.364.93.382h11.375c.273.018.419.164.437.438-.018.273-.164.419-.437.437H2.188c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558V5.063c.018-.274.164-.42.438-.438.273.018.419.164.437.438m9.188 1.312c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h2.624c.274.018.42.164.438.438v2.625c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437v-1.56l-4.074 4.048c-.2.182-.401.182-.602 0L5.688 9.19l-2.325 2.297c-.2.183-.4.183-.601 0-.183-.2-.183-.4 0-.601l2.625-2.625a.364.364 0 0 1 .3-.137c.128 0 .228.046.301.137l1.887 1.86 3.746-3.747zm0 7.875c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438h1.558l-1.86-1.887.602-.601 1.887 1.86v-1.56c.018-.273.164-.419.438-.437.273.018.419.164.437.438v2.624c-.018.274-.164.42-.437.438z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownSmRegularIcon);
export default ForwardRef;
