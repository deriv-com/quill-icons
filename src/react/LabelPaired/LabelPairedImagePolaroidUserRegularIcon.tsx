import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedImagePolaroidUserRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.5 16H1v1c0 .292.094.531.281.719A.974.974 0 0 0 2 18h10a.974.974 0 0 0 .719-.281A.974.974 0 0 0 13 17v-1zm-.062-1H13V7a.974.974 0 0 0-.281-.719A.974.974 0 0 0 12 6H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v8h2.563a2.54 2.54 0 0 1 .843-1.437c.438-.355.969-.542 1.594-.563h2c.625.02 1.156.208 1.594.563.437.374.719.854.844 1.437m-5.844 0h4.812c-.25-.625-.719-.958-1.406-1H6c-.687.042-1.156.375-1.406 1M14 7v10c-.02.563-.219 1.031-.594 1.406S12.562 18.98 12 19H2c-.562-.02-1.031-.219-1.406-.594S.02 17.563 0 17V7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h10c.563.02 1.031.219 1.406.594S13.98 6.437 14 7m-6 3a.973.973 0 0 0-.281-.719A.973.973 0 0 0 7 9a.973.973 0 0 0-.719.281A.973.973 0 0 0 6 10c0 .292.094.531.281.719A.974.974 0 0 0 7 11a.974.974 0 0 0 .719-.281A.974.974 0 0 0 8 10M7 8c.75.02 1.323.354 1.719 1 .375.667.375 1.333 0 2-.396.646-.969.98-1.719 1-.75-.02-1.323-.354-1.719-1-.375-.667-.375-1.333 0-2 .396-.646.969-.98 1.719-1'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserRegularIcon);
export default ForwardRef;
