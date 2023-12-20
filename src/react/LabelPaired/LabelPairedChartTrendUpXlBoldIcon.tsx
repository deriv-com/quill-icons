import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendUpXlBoldIcon = (
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
        d='M28.969 6.516c.562.28.797.937.515 1.5l-4.5 9c-.187.375-.562.609-1.03.609h-6.798l-5.672 11.39c-.28.563-.937.797-1.5.516l-9-4.5c-.562-.281-.796-.937-.515-1.5.281-.562.937-.797 1.5-.515L9.984 27l5.485-10.969a1.153 1.153 0 0 1 1.031-.656h6.797l4.172-8.344c.281-.562.937-.797 1.5-.515'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpXlBoldIcon);
export default ForwardRef;
