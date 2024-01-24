import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
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
    <path d='M6.938 7.75q.859.078.937.938v13.75q.078.858.938.937h16.25q.858.078.937.938-.079.858-.937.937H8.813q-1.212-.04-1.993-.82-.78-.781-.82-1.992V8.688q.078-.86.938-.938m13.75 3.125q-.86-.079-.938-.937.078-.86.938-.938h3.125q.39 0 .664.273a.9.9 0 0 1 .273.665v3.124q-.079.86-.937.938-.86-.079-.938-.937v-.86l-4.96 4.961q-.665.547-1.33 0l-2.46-2.46-2.46 2.46q-.665.547-1.33 0-.546-.664 0-1.328l3.126-3.125q.664-.548 1.328 0l2.461 2.46 4.297-4.296zm0 10.625q-.86-.079-.938-.937.078-.86.938-.938h.859l-1.836-1.836 1.328-1.328 1.836 1.836v-.86q.078-.858.938-.937.858.078.937.938v3.125q0 .39-.273.664a.9.9 0 0 1-.665.273z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineUpDownBoldIcon);
export default ForwardRef;
