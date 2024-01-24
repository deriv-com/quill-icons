import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneEightRegularIcon = (
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
    <path d='M21.625 12.438q0 1.21-.547 2.226a4.85 4.85 0 0 1-1.523 1.64q1.21.586 1.953 1.72.742 1.132.742 2.538-.04 1.993-1.367 3.32-1.328 1.329-3.32 1.368h-3.125q-1.993-.04-3.32-1.367-1.329-1.329-1.368-3.32 0-1.406.742-2.54a4.8 4.8 0 0 1 1.953-1.718 4.85 4.85 0 0 1-1.523-1.64 4.6 4.6 0 0 1-.547-2.227q.04-1.993 1.367-3.32 1.329-1.329 3.32-1.368h1.876q1.992.04 3.32 1.367 1.328 1.329 1.367 3.32m-4.687 4.687h-2.501q-1.444.04-2.421 1.016-.977.975-1.016 2.422.04 1.445 1.016 2.421.976.977 2.422 1.016h3.124q1.446-.04 2.422-1.016.977-.975 1.016-2.422-.04-1.445-1.016-2.421-.975-.977-2.422-1.016zm0-1.25q1.445-.04 2.421-1.016.977-.976 1.016-2.421-.04-1.446-1.016-2.422-.975-.977-2.422-1.016h-1.875q-1.444.04-2.421 1.016t-1.016 2.422q.04 1.444 1.016 2.421t2.422 1.016z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEightRegularIcon);
export default ForwardRef;
