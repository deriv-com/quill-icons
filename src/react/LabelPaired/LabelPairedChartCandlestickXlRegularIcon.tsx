import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartCandlestickXlRegularIcon = (
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
        d='M1.5 8.25v16.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h19.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.75c-1.062-.031-1.953-.39-2.672-1.078C.391 26.703.031 25.812 0 24.75V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75m13.5 0v2.297c.438.094.797.312 1.078.656.281.313.422.703.422 1.172v3.75c-.062.969-.562 1.578-1.5 1.828v2.297c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-2.297a1.856 1.856 0 0 1-1.078-.656c-.281-.313-.422-.703-.422-1.172v-3.75c.063-.969.563-1.578 1.5-1.828V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75M8.25 9c.469.031.719.281.75.75v2.297c.438.094.797.312 1.078.656.281.313.422.703.422 1.172v5.25c-.062.969-.562 1.578-1.5 1.828v2.297c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-2.297a1.856 1.856 0 0 1-1.078-.656C6.14 19.984 6 19.594 6 19.125v-5.25c.063-.969.563-1.578 1.5-1.828V9.75c.031-.469.281-.719.75-.75M15 12.375c-.031-.219-.156-.344-.375-.375h-.75c-.219.031-.344.156-.375.375v3.75c.031.219.156.344.375.375h.75c.219-.031.344-.156.375-.375zm4.875 4.125c-.219.031-.344.156-.375.375v2.25c.031.219.156.344.375.375h.75c.219-.031.344-.156.375-.375v-2.25c-.031-.219-.156-.344-.375-.375zM19.5 15v-2.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v2.297c.438.094.797.312 1.078.656.281.313.422.703.422 1.172v2.25c-.062.969-.562 1.578-1.5 1.828v2.297c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-2.297a1.856 1.856 0 0 1-1.078-.656c-.281-.313-.422-.703-.422-1.172v-2.25c.063-.969.563-1.578 1.5-1.828zM8.625 13.5h-.75c-.219.031-.344.156-.375.375v5.25c.031.219.156.344.375.375h.75c.219-.031.344-.156.375-.375v-5.25c-.031-.219-.156-.344-.375-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickXlRegularIcon);
export default ForwardRef;