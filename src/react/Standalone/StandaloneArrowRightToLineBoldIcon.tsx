import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowRightToLineBoldIcon = (
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
      d='M24.75 9.938v13.125c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V9.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938m-5.312 7.265.039-.039-5.313 5c-.469.365-.911.352-1.328-.039-.365-.443-.352-.872.039-1.29l3.594-3.398H8.187c-.572-.052-.885-.364-.937-.937.052-.573.365-.885.938-.937h8.28l-3.593-3.399c-.39-.417-.404-.846-.04-1.289.418-.39.847-.404 1.29-.04l5.313 5a.851.851 0 0 1 .312.665c0 .26-.104.495-.312.703'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightToLineBoldIcon);
export default ForwardRef;
