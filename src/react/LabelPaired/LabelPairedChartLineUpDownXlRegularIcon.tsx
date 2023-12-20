import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineUpDownXlRegularIcon = (
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
        d='M1.5 8.25v16.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h19.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.75c-1.062-.031-1.953-.39-2.672-1.078C.391 26.703.031 25.812 0 24.75V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75m15.75 2.25c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h4.5c.469.031.719.281.75.75v4.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-2.672l-6.984 6.938c-.344.312-.688.312-1.032 0L9.75 15.328l-3.984 3.938c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l4.5-4.5a.624.624 0 0 1 .516-.234c.219 0 .39.078.516.234l3.234 3.188 6.422-6.422zm0 13.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h2.672l-3.188-3.234 1.032-1.032L21 21.422V18.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75v4.5c-.031.469-.281.719-.75.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownXlRegularIcon);
export default ForwardRef;
