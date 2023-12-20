import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepXlRegularIcon = (
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
        d='M12 9.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75v16.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-6.375l-8.39 6.844a1.183 1.183 0 0 1-.797.281c-.376 0-.688-.125-.938-.375a1.272 1.272 0 0 1-.375-.937V10.313c0-.376.125-.688.375-.938S2.438 9 2.813 9c.312 0 .578.094.796.281L12 16.125zm-9 .984v14.532L11.953 18z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlRegularIcon);
export default ForwardRef;
