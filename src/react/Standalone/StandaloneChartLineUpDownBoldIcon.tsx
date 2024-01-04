import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartLineUpDownBoldIcon = (
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
      d='M6.938 7.75c.572.052.885.365.937.938v13.75c.052.572.365.885.938.937h16.25c.572.052.885.365.937.938-.052.572-.365.885-.938.937H8.813c-.807-.026-1.47-.3-1.992-.82-.52-.521-.794-1.185-.82-1.992V8.688c.052-.573.365-.886.938-.938Zm13.75 3.125c-.573-.052-.886-.365-.938-.938.052-.572.365-.885.938-.937h3.125c.26 0 .481.091.664.273a.904.904 0 0 1 .273.665v3.124c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938v-.859l-4.96 4.961c-.444.365-.886.365-1.33 0l-2.46-2.46-2.46 2.46c-.444.365-.886.365-1.33 0-.364-.443-.364-.885 0-1.328l3.126-3.125c.443-.365.885-.365 1.328 0l2.461 2.46 4.297-4.296h-.86Zm0 10.625c-.573-.052-.886-.365-.938-.938.052-.572.365-.885.938-.937h.859l-1.836-1.836 1.328-1.328 1.836 1.836v-.86c.052-.572.365-.885.938-.937.572.052.885.365.937.938v3.125c0 .26-.091.481-.273.664a.904.904 0 0 1-.665.273h-3.125Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineUpDownBoldIcon);
export default ForwardRef;
