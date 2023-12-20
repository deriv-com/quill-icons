import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTrashXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.344 7.5c-.281 0-.5.125-.656.375L6.984 9h7.032l-.703-1.125c-.157-.25-.376-.375-.657-.375zM15.797 9H20.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-.844l-1.218 16.734a2.94 2.94 0 0 1-.938 1.97c-.562.5-1.25.765-2.062.796H5.813c-.813-.031-1.5-.297-2.063-.797a2.94 2.94 0 0 1-.937-1.969L1.593 10.5H.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75H5.203l1.219-1.922C6.89 6.391 7.532 6.031 8.344 6h4.312c.813.031 1.453.39 1.922 1.078zm2.11 1.5H3.093l1.219 16.594c.03.406.187.734.468.984.282.281.625.422 1.032.422h9.375c.406 0 .75-.14 1.03-.422.282-.25.438-.578.47-.984z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashXlRegularIcon);
export default ForwardRef;
