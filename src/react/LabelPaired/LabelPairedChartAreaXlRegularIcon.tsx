import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartAreaXlRegularIcon = (
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
        d='M1.5 8.25v16.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h19.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.75c-1.062-.031-1.953-.39-2.672-1.078C.391 26.703.031 25.812 0 24.75V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75m12.422 7.828L10.5 12.61l-4.266 4.313a.624.624 0 0 0-.234.515V22.5h15v-4.406a.807.807 0 0 0-.187-.516l-2.907-3.375-1.828 1.875A1.564 1.564 0 0 1 15 16.5c-.406 0-.766-.14-1.078-.422m0-2.156L15 15l1.078-1.078.797-.797a1.565 1.565 0 0 1 1.078-.422c.438.031.797.203 1.078.516l2.907 3.422c.375.406.562.89.562 1.453V22.5c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422H6c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078v-5.062c0-.625.219-1.157.656-1.594l4.266-4.266c.312-.312.672-.469 1.078-.469s.766.157 1.078.47z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaXlRegularIcon);
export default ForwardRef;
