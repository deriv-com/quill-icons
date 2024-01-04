import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedInfoMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={24}
    viewBox='0 0 6 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 6c0-.292.094-.531.281-.719A.973.973 0 0 1 3 5c.292 0 .531.094.719.281A.973.973 0 0 1 4 6a.973.973 0 0 1-.281.719A.973.973 0 0 1 3 7a.973.973 0 0 1-.719-.281A.973.973 0 0 1 2 6ZM.5 9.5c.02-.313.188-.48.5-.5h2c.313.02.48.188.5.5V18h2c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h2v-8H1c-.313-.02-.48-.188-.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoMdRegularIcon);
export default ForwardRef;
