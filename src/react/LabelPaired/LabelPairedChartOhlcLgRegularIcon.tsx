import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartOhlcLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.5 5.5c.313 0 .625.313.625.625V8H15c.313 0 .625.313.625.625A.642.642 0 0 1 15 9.25h-1.875v13.125A.642.642 0 0 1 12.5 23a.617.617 0 0 1-.625-.625V20.5H10a.617.617 0 0 1-.625-.625c0-.313.273-.625.625-.625h1.875V6.125c0-.313.273-.625.625-.625ZM20.625 8c.313 0 .625.313.625.625v8.125h1.875c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H21.25v1.875a.642.642 0 0 1-.625.625.617.617 0 0 1-.625-.625V11.75h-1.875a.617.617 0 0 1-.625-.625c0-.313.273-.625.625-.625H20V8.625c0-.313.273-.625.625-.625Zm-16.25 5c.313 0 .625.313.625.625v8.125h1.875c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H5v1.875a.642.642 0 0 1-.625.625.617.617 0 0 1-.625-.625V16.75H1.875a.617.617 0 0 1-.625-.625c0-.313.273-.625.625-.625H3.75v-1.875c0-.313.273-.625.625-.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcLgRegularIcon);
export default ForwardRef;
