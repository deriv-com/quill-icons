import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTrashXlBoldIcon = (
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
        d='M8.297 8.25c-.125 0-.219.063-.281.188L7.125 9.75h6.797l-.89-1.312c-.095-.126-.204-.188-.329-.188zm8.297 1.5h3.281c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-.562l-1.125 15.234a2.94 2.94 0 0 1-.938 1.97c-.562.5-1.234.765-2.016.796H5.766c-.782-.031-1.453-.297-2.016-.797a2.94 2.94 0 0 1-.937-1.969L1.687 12h-.562C.438 11.938.063 11.563 0 10.875c.063-.687.438-1.062 1.125-1.125h3.281l1.735-2.578c.53-.75 1.25-1.14 2.156-1.172h4.406c.906.031 1.64.422 2.203 1.172zm.468 2.25H3.938l1.079 15.047c.093.437.343.672.75.703h9.468c.407-.031.657-.266.75-.703z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashXlBoldIcon);
export default ForwardRef;
