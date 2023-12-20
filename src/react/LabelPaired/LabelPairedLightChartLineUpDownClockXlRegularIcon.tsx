import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLightChartLineUpDownClockXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v16.5c0 1.266.984 2.25 2.25 2.25h12.14c.282.563.61 1.078.985 1.5H3.75C1.64 28.5 0 26.86 0 24.75zm4.688 9.984 4.5-4.5a.776.776 0 0 1 .562-.234c.188 0 .375.094.516.234L13.5 16.97a830.342 830.342 0 0 1 6.422-6.469H17.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.5c.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-2.672c-2.344 2.344-4.687 4.64-6.984 6.985-.282.28-.797.28-1.078 0a205.775 205.775 0 0 1-3.188-3.235C8.39 16.641 7.078 18 5.766 19.313c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079M16.5 23.25c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m1.5 0a5.241 5.241 0 0 0 5.25 5.25c2.86 0 5.25-2.344 5.25-5.25 0-2.86-2.39-5.25-5.25-5.25-2.906 0-5.25 2.39-5.25 5.25m4.5-3c0-.375.328-.75.75-.75.375 0 .75.375.75.75v2.25h1.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-2.25a.74.74 0 0 1-.75-.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockXlRegularIcon);
export default ForwardRef;
