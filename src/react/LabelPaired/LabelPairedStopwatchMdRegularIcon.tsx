import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedStopwatchMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4 4.5c.02-.313.188-.48.5-.5h5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-2v2.031c1.583.146 2.917.74 4 1.782l1.156-1.157c.23-.208.459-.208.688 0 .208.23.208.459 0 .688L12.156 9.53c.875 1.125 1.323 2.448 1.344 3.969-.042 1.833-.677 3.365-1.906 4.594C10.364 19.323 8.834 19.958 7 20c-1.833-.042-3.365-.677-4.594-1.906C1.177 16.864.542 15.334.5 13.5c.042-1.75.625-3.23 1.75-4.438 1.125-1.187 2.542-1.864 4.25-2.03V5h-2c-.313-.02-.48-.188-.5-.5Zm-2.5 9c0 1 .25 1.917.75 2.75.48.833 1.146 1.5 2 2 .875.5 1.792.75 2.75.75s1.875-.25 2.75-.75a5.418 5.418 0 0 0 2-2c.5-.833.75-1.75.75-2.75s-.25-1.917-.75-2.75a5.418 5.418 0 0 0-2-2A5.464 5.464 0 0 0 7 8c-.958 0-1.875.25-2.75.75a5.418 5.418 0 0 0-2 2c-.5.833-.75 1.75-.75 2.75Zm6-3V14c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-3.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchMdRegularIcon);
export default ForwardRef;
