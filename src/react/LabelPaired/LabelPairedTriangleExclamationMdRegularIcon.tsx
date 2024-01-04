import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTriangleExclamationMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.094 17.125a.603.603 0 0 0-.094.313c.042.354.23.541.563.562h12.874c.334-.02.521-.208.563-.563a.835.835 0 0 0-.063-.312l-6.28-10.75C8.49 6.125 8.27 6 8 6c-.27 0-.48.125-.625.375l-6.281 10.75Zm-.875-.5L6.5 5.875c.354-.563.854-.854 1.5-.875.646.02 1.146.313 1.5.875l6.281 10.75c.146.25.219.52.219.813-.02.437-.177.802-.469 1.093a1.597 1.597 0 0 1-1.094.469H1.563a1.597 1.597 0 0 1-1.094-.469A1.597 1.597 0 0 1 0 17.438c0-.292.073-.563.219-.813ZM8 9c.313.02.48.188.5.5v4c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-4c.02-.313.188-.48.5-.5Zm-.75 7c.042-.458.292-.708.75-.75.458.042.708.292.75.75-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationMdRegularIcon);
export default ForwardRef;
