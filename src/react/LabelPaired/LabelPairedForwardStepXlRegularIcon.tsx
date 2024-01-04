import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardStepXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12 9.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75v16.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-6.375l-8.39 6.844a1.183 1.183 0 0 1-.797.281c-.376 0-.688-.125-.938-.375a1.272 1.272 0 0 1-.375-.938V10.313c0-.374.125-.687.375-.937S2.438 9 2.813 9c.312 0 .578.094.796.281L12 16.125V9.75Zm-9 .984v14.532L11.953 18 3 10.734Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlRegularIcon);
export default ForwardRef;
