import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFourBoldIcon = (
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
      d='M15.883 9.117 11 18.375h8.125v-5.937c.052-.573.365-.886.938-.938.572.052.885.365.937.938v5.937h1.563c.572.052.885.365.937.938-.052.572-.365.885-.937.937H21v4.063c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V20.25H9.438c-.339 0-.612-.156-.82-.469-.157-.286-.157-.586 0-.898l5.624-10.625c.313-.495.73-.625 1.25-.39.495.312.625.728.39 1.25'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFourBoldIcon);
export default ForwardRef;
