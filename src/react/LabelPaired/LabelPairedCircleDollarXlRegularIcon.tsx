import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleDollarXlRegularIcon = (
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
        d='M22.5 18c-.031-1.906-.5-3.656-1.406-5.25-.938-1.594-2.219-2.875-3.844-3.844C15.594 7.97 13.844 7.5 12 7.5c-1.844 0-3.594.469-5.25 1.406-1.625.969-2.906 2.25-3.844 3.844C2 14.344 1.531 16.094 1.5 18c.031 1.906.5 3.656 1.406 5.25.938 1.594 2.219 2.875 3.844 3.844C8.406 28.03 10.156 28.5 12 28.5c1.844 0 3.594-.469 5.25-1.406 1.625-.969 2.906-2.25 3.844-3.844C22 21.656 22.469 19.906 22.5 18M0 18c.031-2.187.563-4.187 1.594-6C2.656 10.188 4.125 8.719 6 7.594 7.906 6.53 9.906 6 12 6s4.094.531 6 1.594c1.875 1.125 3.344 2.593 4.406 4.406 1.032 1.813 1.563 3.813 1.594 6-.031 2.188-.562 4.188-1.594 6-1.062 1.813-2.531 3.281-4.406 4.406C16.094 29.47 14.094 30 12 30s-4.094-.531-6-1.594C4.125 27.281 2.656 25.813 1.594 24 .563 22.188.03 20.188 0 18m12.75-6.375v1.078c.625.063 1.25.188 1.875.375.031.031.063.047.094.047s.062.016.094.047c.437.156.609.453.515.89-.156.438-.453.626-.89.563a2.567 2.567 0 0 0-.329-.14 16.933 16.933 0 0 0-1.078-.235c-.937-.125-1.719-.047-2.344.234-.562.282-.859.594-.89.938-.094.437.062.765.469.984.5.313 1.203.578 2.109.797h.047c.906.219 1.75.563 2.531 1.031.906.657 1.281 1.532 1.125 2.625-.25 1.032-.844 1.72-1.781 2.063a4.865 4.865 0 0 1-1.547.328v1.125c-.062.469-.312.719-.75.75-.469-.031-.719-.281-.75-.75v-1.219a21.737 21.737 0 0 1-1.547-.375 11.136 11.136 0 0 1-.937-.328c-.438-.187-.594-.5-.47-.937.157-.407.47-.563.938-.47l.938.282c.562.188 1 .313 1.312.375.938.125 1.688.063 2.25-.187.5-.22.782-.532.844-.938.094-.469-.062-.844-.469-1.125a6.839 6.839 0 0 0-1.921-.75.417.417 0 0 0-.188-.047.36.36 0 0 0-.14-.047 10.384 10.384 0 0 1-2.438-.937 3 3 0 0 1-.938-1.031c-.25-.438-.312-.938-.187-1.5.25-1 .844-1.688 1.781-2.063.375-.125.766-.234 1.172-.328v-1.125c.031-.469.281-.719.75-.75.438.031.688.281.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarXlRegularIcon);
export default ForwardRef;