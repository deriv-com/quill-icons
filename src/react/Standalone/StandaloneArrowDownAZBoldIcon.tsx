import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowDownAZBoldIcon = (
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
      d='M6.586 21.227c-.365-.443-.365-.886 0-1.329.443-.364.885-.364 1.328 0l2.149 2.149V8.687c.052-.572.364-.885.937-.937.573.052.885.365.938.938v13.359l2.148-2.149c.443-.364.885-.364 1.328 0 .365.443.365.886 0 1.329l-3.75 3.75c-.443.364-.885.364-1.328 0l-3.75-3.75ZM18.5 17.75h5c.39.026.677.208.86.547.13.364.078.703-.157 1.015l-3.633 4.063h2.93c.573.052.885.365.938.938-.053.572-.365.885-.938.937h-5a.991.991 0 0 1-.86-.547 1.025 1.025 0 0 1 .157-1.015l3.633-4.063H18.5c-.573-.052-.885-.365-.938-.938.053-.572.365-.885.938-.937Zm2.5-10c.39.026.664.195.82.508l3.125 6.25c.209.547.078.963-.39 1.25-.547.208-.964.078-1.25-.39l-.547-1.056H19.243l-.548 1.055c-.286.469-.703.612-1.25.43-.468-.313-.599-.742-.39-1.29l3.125-6.25c.182-.338.455-.507.82-.507Zm-.82 4.688h1.64L21 10.796l-.82 1.64Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownAZBoldIcon);
export default ForwardRef;
