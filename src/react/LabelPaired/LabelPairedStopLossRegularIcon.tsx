import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopLossRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.813 16.344c-.72 0-1.313-.125-1.813-.375s-.906-.594-1.25-1.031l.938-.876c.28.344.625.626.968.813.344.188.75.281 1.219.281.531 0 .938-.125 1.219-.375.281-.25.406-.562.406-.969 0-.312-.094-.593-.281-.78-.188-.188-.531-.344-1.031-.438l-.75-.125c-.813-.156-1.407-.406-1.813-.813C4.188 11.281 4 10.75 4 10.094c0-.375.063-.719.188-1 .156-.313.343-.563.593-.75.25-.219.563-.375.938-.5a4.62 4.62 0 0 1 1.218-.157c.625 0 1.157.094 1.625.344.47.188.876.531 1.188.938l-.937.844a2.753 2.753 0 0 0-.782-.688c-.312-.156-.719-.25-1.187-.25-.469 0-.844.094-1.094.281-.281.188-.406.469-.406.844s.125.625.312.813c.219.156.563.28 1.032.374l.75.157c.812.156 1.437.437 1.812.812.406.375.594.906.594 1.594 0 .375-.063.75-.188 1.063-.156.312-.344.593-.625.812-.25.25-.562.406-.937.531a4.09 4.09 0 0 1-1.281.188m4.656-.157V7.813h1.344V15h3.406v1.188z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossRegularIcon);
export default ForwardRef;
