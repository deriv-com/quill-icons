import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBoxArchiveCircleArrowUpXlRegularIcon = (
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
        d='M0 9c0-.797.656-1.5 1.5-1.5h21c.797 0 1.5.703 1.5 1.5v3c0 .844-.703 1.5-1.5 1.5h-21A1.48 1.48 0 0 1 0 12zm1.5 0v3h21V9zm0 6H3v10.5c0 .844.656 1.5 1.5 1.5h11.39c.282.563.61 1.078.985 1.5H4.5c-1.687 0-3-1.312-3-3zm6 2.25c0-.375.328-.75.75-.75h7.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-7.5a.74.74 0 0 1-.75-.75m9.89 2.625c1.22-2.062 3.422-3.375 5.86-3.375 2.39 0 4.64 1.313 5.813 3.375 1.218 2.11 1.218 4.688 0 6.75C27.89 28.735 25.64 30 23.25 30a6.713 6.713 0 0 1-5.86-3.375c-1.218-2.062-1.218-4.64 0-6.75m1.313.75c-.937 1.64-.937 3.656 0 5.25A5.217 5.217 0 0 0 23.25 28.5c1.875 0 3.61-.984 4.547-2.625.937-1.594.937-3.61 0-5.25C26.859 19.031 25.125 18 23.25 18c-1.875 0-3.61 1.031-4.547 2.625m1.36 1.734 2.625-2.625c.28-.28.796-.28 1.078 0l2.625 2.625c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0-.422-.468-.891-.89-1.313-1.359v4.172c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.172c-.469.469-.937.89-1.36 1.36-.28.28-.796.28-1.078 0-.28-.282-.28-.797 0-1.079M21 15h1.5v.047a7.726 7.726 0 0 0-1.5.281z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowUpXlRegularIcon);
export default ForwardRef;
