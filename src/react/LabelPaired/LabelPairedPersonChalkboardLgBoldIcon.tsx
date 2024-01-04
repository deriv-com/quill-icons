import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPersonChalkboardLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.5 9.25c-.703-.026-1.25-.339-1.64-.938-.313-.624-.313-1.25 0-1.874.39-.6.937-.912 1.64-.938.703.026 1.25.339 1.64.938.313.625.313 1.25 0 1.875-.39.598-.937.911-1.64.937Zm-.547 3.125h-.078v5h1.25v-5H6.953Zm-.078 12.188c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V14.25l-1.68 2.969c-.338.468-.768.586-1.289.351-.469-.338-.586-.768-.351-1.289l2.304-4.023c.313-.547.73-.977 1.25-1.29a3.277 3.277 0 0 1 1.72-.468H12.5V7.375c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547h8.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v8.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-8.75a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328V14.25h1.875v1.875h8.75v-8.75h-8.75V10.5h.938c.572.052.885.365.937.938-.052.572-.365.885-.938.937H10v12.188c-.052.572-.365.885-.938.937-.572-.052-.885-.365-.937-.938V19.25h-1.25v5.313Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardLgBoldIcon);
export default ForwardRef;
