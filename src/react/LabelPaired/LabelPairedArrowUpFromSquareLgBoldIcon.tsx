import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpFromSquareLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m10.664 5.773 4.375 4.375c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0l-2.774-2.774v9.61c-.052.572-.364.885-.937.937-.573-.052-.885-.365-.938-.938V8.704L6.29 11.477c-.443.364-.885.364-1.328 0-.365-.443-.365-.886 0-1.329l4.375-4.375c.443-.364.885-.364 1.328 0Zm-7.851.977h.312c.573.052.885.365.938.938-.053.572-.365.885-.938.937h-.313c-.572.052-.885.365-.937.938v13.124c.052.573.365.886.938.938h14.374c.573-.052.886-.365.938-.938V9.563c-.052-.572-.365-.885-.938-.937h-.312c-.573-.052-.885-.365-.938-.938.053-.572.365-.885.938-.937h.313c.807.026 1.47.3 1.992.82.52.521.794 1.185.82 1.992v13.126c-.026.807-.3 1.47-.82 1.992-.521.52-1.185.794-1.992.82H2.813c-.808-.026-1.472-.3-1.993-.82-.52-.521-.794-1.185-.82-1.992V9.563C.026 8.755.3 8.09.82 7.57c.521-.52 1.185-.794 1.993-.82Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareLgBoldIcon);
export default ForwardRef;
