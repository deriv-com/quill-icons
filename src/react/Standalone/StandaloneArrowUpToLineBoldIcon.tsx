import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpToLineBoldIcon = (
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
      d='M9.438 7.75h13.124c.573.052.886.365.938.938-.052.572-.365.885-.938.937H9.438c-.572-.052-.885-.365-.937-.938.052-.572.365-.885.938-.937Zm7.265 5.313h-.039l5 5.312c.365.443.352.872-.039 1.29-.443.364-.872.35-1.29-.04l-3.398-3.555v8.242c-.052.573-.364.886-.937.938-.573-.052-.885-.365-.938-.938V16.07l-3.398 3.594c-.417.365-.846.378-1.289.04-.39-.444-.404-.886-.04-1.329l5-5.313A.851.851 0 0 1 16 12.75c.26 0 .495.104.703.313Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpToLineBoldIcon);
export default ForwardRef;
