import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 8.25v16.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h19.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.75c-1.062-.031-1.953-.39-2.672-1.078C.391 26.703.031 25.812 0 24.75V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75m20.766 5.016-6.75 6.75c-.344.312-.688.312-1.032 0L10.5 16.078l-4.734 4.688c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l5.25-5.25c.344-.312.688-.312 1.032 0L15 18.422l6.234-6.188c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineXlRegularIcon);
export default ForwardRef;
