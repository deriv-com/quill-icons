import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneWalletBoldIcon = (
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
    <path d='M9.438 7.75h14.375q.858.078.937.938-.079.858-.937.937H9.438q-.665 0-1.094.469a1.42 1.42 0 0 0-.469 1.094v10.625q0 .663.469 1.093.428.47 1.094.469h13.125q.663 0 1.093-.469.47-.429.469-1.093v-6.875q0-.665-.469-1.094a1.42 1.42 0 0 0-1.093-.469H10.688q-.86-.079-.938-.937.078-.86.938-.938h11.875q1.445.04 2.421 1.016.977.976 1.016 2.422v6.874q-.04 1.446-1.016 2.422-.975.977-2.422 1.016H9.438q-1.444-.04-2.421-1.016Q6.039 23.26 6 21.812V11.188q.04-1.444 1.016-2.421T9.438 7.75M21 19.625q-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWalletBoldIcon);
export default ForwardRef;
