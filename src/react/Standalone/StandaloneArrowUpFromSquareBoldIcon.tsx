import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpFromSquareBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='m16.664 6.773 4.375 4.375c.365.443.365.886 0 1.329-.443.364-.885.364-1.328 0l-2.773-2.774v9.61c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.938-.938V9.704l-2.773 2.774c-.443.364-.885.364-1.328 0-.365-.443-.365-.886 0-1.329l4.375-4.375c.443-.364.885-.364 1.328 0Zm-7.852.977h.313c.573.052.885.365.938.938-.053.572-.365.885-.938.937h-.313c-.572.052-.885.365-.937.938v13.124c.052.573.365.886.938.938h14.374c.573-.052.886-.365.938-.938V10.563c-.052-.572-.365-.885-.938-.937h-.312c-.573-.052-.885-.365-.938-.938.053-.572.365-.885.938-.937h.313c.807.026 1.47.3 1.992.82.52.521.794 1.185.82 1.992v13.126c-.026.807-.3 1.47-.82 1.992-.521.52-1.185.794-1.992.82H8.813c-.808-.026-1.472-.3-1.993-.82-.52-.521-.794-1.185-.82-1.992V10.563c.026-.808.3-1.472.82-1.993.521-.52 1.185-.794 1.992-.82Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpFromSquareBoldIcon);
export default ForwardRef;
