import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTriangleExclamationXlRegularIcon = (
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
        d='M1.64 25.688a.905.905 0 0 0-.14.468c.063.532.344.813.844.844h19.312c.5-.031.782-.312.844-.844 0-.156-.031-.312-.094-.468L12.984 9.563C12.734 9.187 12.406 9 12 9s-.719.188-.937.563zm-1.312-.75L9.75 8.813C10.281 7.969 11.031 7.53 12 7.5c.969.031 1.719.469 2.25 1.313l9.422 16.124c.219.375.328.782.328 1.22-.031.656-.266 1.202-.703 1.64-.438.437-.985.672-1.64.703H2.343c-.656-.031-1.203-.266-1.64-.703-.438-.438-.673-.985-.704-1.64 0-.438.11-.844.328-1.22M12 13.5c.469.031.719.281.75.75v6c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-6c.031-.469.281-.719.75-.75M10.875 24c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationXlRegularIcon);
export default ForwardRef;
