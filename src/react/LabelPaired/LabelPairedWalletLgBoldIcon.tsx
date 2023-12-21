import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.438 6.75h14.375c.572.052.885.365.937.938-.052.572-.365.885-.937.937H3.438c-.443 0-.808.156-1.094.469a1.418 1.418 0 0 0-.469 1.094v10.625c0 .442.156.807.469 1.093.286.313.65.469 1.094.469h13.125c.442 0 .807-.156 1.093-.469.313-.286.469-.65.469-1.093v-6.875c0-.443-.156-.808-.469-1.094a1.418 1.418 0 0 0-1.093-.469H4.688c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h11.875c.963.026 1.77.365 2.421 1.016.651.65.99 1.458 1.016 2.422v6.874c-.026.964-.365 1.771-1.016 2.422-.65.651-1.458.99-2.422 1.016H3.438c-.963-.026-1.77-.365-2.421-1.016-.651-.65-.99-1.458-1.016-2.422V10.188c.026-.963.365-1.77 1.016-2.421.65-.651 1.458-.99 2.422-1.016M15 18.625c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898s-.117.664-.352.898c-.234.235-.533.352-.898.352'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletLgBoldIcon);
export default ForwardRef;