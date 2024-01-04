import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.25 8.625v16.5c.063.688.438 1.063 1.125 1.125h19.5c.688.063 1.063.438 1.125 1.125-.063.688-.438 1.063-1.125 1.125h-19.5c-.969-.031-1.766-.36-2.39-.984C.358 26.89.03 26.094 0 25.125v-16.5C.063 7.937.438 7.562 1.125 7.5c.688.063 1.063.438 1.125 1.125Zm19.922 5.297-6.375 6.375c-.531.437-1.063.437-1.594 0L10.5 16.594l-3.703 3.703c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l4.5-4.5c.219-.219.485-.328.797-.328.313 0 .578.11.797.328L15 17.906l5.578-5.578c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineXlBoldIcon);
export default ForwardRef;
