import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPhoneXlRegularIcon = (
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
        d='m17.625 18.89 5.25 2.25c.406.188.719.485.938.891.187.375.234.782.14 1.219l-1.125 5.25c-.25.938-.86 1.438-1.828 1.5h-.844a4.64 4.64 0 0 0-.656-.047c-3.656-.312-6.953-1.422-9.89-3.328a21.016 21.016 0 0 1-6.985-7.453C.906 16.14.031 12.75 0 9c.063-.969.563-1.578 1.5-1.828l5.25-1.125a1.651 1.651 0 0 1 1.219.187c.406.188.703.485.89.891l2.25 5.25c.313.844.125 1.578-.562 2.203l-1.875 1.547a14.322 14.322 0 0 0 5.203 5.203l1.547-1.875c.625-.687 1.36-.875 2.203-.562M21 28.5c.188 0 .313-.094.375-.281l1.125-5.25c.031-.219-.047-.36-.234-.422l-5.25-2.25c-.157-.063-.297-.031-.422.094l-1.547 1.922c-.563.562-1.203.671-1.922.328a15.469 15.469 0 0 1-5.766-5.766c-.343-.719-.234-1.36.329-1.922l1.921-1.547c.125-.125.157-.265.094-.422l-2.25-5.25c-.094-.187-.234-.265-.422-.234l-5.25 1.125c-.187.063-.281.188-.281.375.031 3.625.922 6.906 2.672 9.844a19.192 19.192 0 0 0 6.984 6.984c2.938 1.75 6.219 2.64 9.844 2.672'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneXlRegularIcon);
export default ForwardRef;
