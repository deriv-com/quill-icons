import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowUpOneNineBoldIcon = (
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
    <path d='M22.563 8.688v4.687h.937q.859.078.938.938-.079.858-.938.937h-3.75q-.86-.079-.937-.937.078-.86.937-.938h.938V9.977l-.625.234q-.86.195-1.211-.586-.195-.86.585-1.21l1.875-.626q.47-.117.86.156.39.274.39.742m-12.227-.665q.664-.546 1.328 0l3.75 3.75q.548.664 0 1.329-.664.546-1.328 0l-2.149-2.149v13.36q-.078.858-.937.937-.86-.079-.937-.937v-13.36l-2.149 2.149q-.664.546-1.328 0-.548-.664 0-1.329zm10.977 10.352q-.9.04-1.368.781a1.66 1.66 0 0 0 0 1.563q.469.742 1.367.781.9-.04 1.368-.781a1.66 1.66 0 0 0 0-1.563q-.469-.742-1.367-.781m-.704 4.922q-1.21-.273-1.953-1.172-.742-.898-.781-2.187.04-1.446 1.016-2.422.975-.977 2.422-1.016 1.445.04 2.421 1.016.977.975 1.016 2.422 0 1.288-.82 2.265l-2.188 2.695q-.625.626-1.328.157-.626-.626-.156-1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpOneNineBoldIcon);
export default ForwardRef;
