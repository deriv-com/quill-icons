import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTwoXlRegularIcon = (
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
        d='M6.938 9c-1.407.031-2.61.531-3.61 1.5l-1.312 1.266c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032L2.25 9.422c1.313-1.25 2.875-1.89 4.688-1.922 1.843.031 3.39.672 4.64 1.922 1.219 1.219 1.86 2.75 1.922 4.594-.031 1.875-.719 3.453-2.062 4.734L2.672 27H14.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75H.75c-.344 0-.578-.156-.703-.469a.841.841 0 0 1 .187-.843l10.172-9.516c1.031-1 1.563-2.219 1.594-3.656-.031-1.407-.531-2.594-1.5-3.563C9.563 9.516 8.375 9.031 6.938 9'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoXlRegularIcon);
export default ForwardRef;
