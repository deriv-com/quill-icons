import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneRightFromBracketBoldIcon = (
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
    <path d='M19.75 12.203v2.11q-.078.858-.937.937h-4.688v2.5h4.688q.858.078.937.938v2.109l4.297-4.297zM26 16.5q0 .703-.508 1.21l-4.531 4.493q-.508.547-1.29.547-.74 0-1.25-.547a1.84 1.84 0 0 1-.546-1.25v-1.328h-3.75a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-2.5q.039-.78.547-1.328.546-.508 1.328-.547h3.75v-1.328q.039-.743.547-1.25.507-.508 1.25-.547.78 0 1.289.547l4.531 4.492Q26 15.797 26 16.5M12.563 9.625H9.437q-.663 0-1.093.469a1.42 1.42 0 0 0-.469 1.094v10.625q0 .663.469 1.093.428.47 1.094.469h3.124q.86.078.938.938-.079.858-.937.937H9.437q-1.444-.04-2.421-1.016Q6.039 23.26 6 21.812V11.188q.04-1.444 1.016-2.421T9.438 7.75h3.124q.86.078.938.938-.079.858-.937.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRightFromBracketBoldIcon);
export default ForwardRef;
