import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSterlingSignXlRegularIcon = (
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
        d='M3.75 13.125V18h7.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-7.5A18.352 18.352 0 0 1 1.969 27H14.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75H.75c-.281 0-.5-.125-.656-.375a.797.797 0 0 1 0-.75l.047-.094A17.457 17.457 0 0 0 2.25 19.5H.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h1.5v-4.875c.031-1.594.578-2.922 1.64-3.984C4.954 8.078 6.282 7.53 7.876 7.5h.328c.625 0 1.219.094 1.781.281l3.75 1.266c.407.187.563.5.47.937-.188.438-.5.594-.938.47l-3.75-1.22A3.88 3.88 0 0 0 8.203 9h-.328c-1.156.031-2.125.438-2.906 1.219-.782.781-1.188 1.75-1.219 2.906'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignXlRegularIcon);
export default ForwardRef;
