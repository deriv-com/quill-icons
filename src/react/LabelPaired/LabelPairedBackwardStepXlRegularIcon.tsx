import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 9.75v6.375l8.39-6.844c.22-.187.485-.281.797-.281.376 0 .688.125.938.375s.375.563.375.938v15.375c0 .375-.125.687-.375.937s-.562.375-.937.375c-.313 0-.579-.094-.797-.281L3 19.875v6.375c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V9.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75m9 .984L3.047 18 12 25.266z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlRegularIcon);
export default ForwardRef;
