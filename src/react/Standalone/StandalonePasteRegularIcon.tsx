import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePasteRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M12.25 7.75q-.742.039-.898.742-.157.47-.625.508h-.352q-.585.039-.625.625v.625h5v-.625q-.039-.585-.625-.625h-.352q-.468-.039-.585-.508-.195-.703-.938-.742M8.5 9q-.547 0-.898.352-.352.35-.352.898V21.5q0 .547.352.898.35.352.898.352h5V24h-5q-1.055-.039-1.758-.742Q6.04 22.554 6 21.5V10.25q.039-1.055.742-1.758T8.5 7.75h1.758q.625-1.172 1.992-1.25 1.368.078 1.992 1.25H16q1.055.039 1.758.742t.742 1.758h-1.25q0-.547-.352-.898Q16.548 9 16 9h-.117q.117.313.117.625v.625q0 .547-.352.898-.35.352-.898.352h-5q-.547 0-.898-.352-.352-.35-.352-.898v-.625q0-.312.117-.625zm8.75 16.25h6.25q.547 0 .898-.352.352-.35.352-.898v-7.5h-2.187q-.665 0-1.094-.469A1.42 1.42 0 0 1 21 14.938V12.75h-3.75q-.547 0-.898.352Q16 13.452 16 14v10q0 .547.352.898.35.352.898.352m5-12.305v1.992q.039.274.313.313h1.992zM23.5 26.5h-6.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758V14q.039-1.055.742-1.758.704-.703 1.758-.742h4.531q.782 0 1.328.547l2.344 2.344q.547.546.547 1.328V24q-.039 1.055-.742 1.758-.704.703-1.758.742' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePasteRegularIcon);
export default ForwardRef;
