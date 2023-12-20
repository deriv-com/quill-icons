import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTriangleExclamationRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.094 17.125a.603.603 0 0 0-.094.313c.042.354.23.541.563.562h12.875c.333-.02.52-.208.562-.562a.835.835 0 0 0-.062-.313L8.656 6.375C8.49 6.125 8.271 6 8 6c-.27 0-.48.125-.625.375zm-.875-.5L6.5 5.875c.354-.562.854-.854 1.5-.875.646.02 1.146.313 1.5.875l6.281 10.75c.146.25.219.52.219.813-.02.437-.177.802-.469 1.093a1.597 1.597 0 0 1-1.094.469H1.563a1.597 1.597 0 0 1-1.094-.469A1.597 1.597 0 0 1 0 17.438c0-.292.073-.563.219-.813M8 9c.313.02.48.188.5.5v4c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-4c.02-.312.188-.48.5-.5m-.75 7c.042-.458.292-.708.75-.75.458.042.708.292.75.75-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationRegularIcon);
export default ForwardRef;
