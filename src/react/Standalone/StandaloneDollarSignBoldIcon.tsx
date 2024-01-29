import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneDollarSignBoldIcon = (
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
    <path d='M16.938 7.438v1.914q1.64.195 2.812.507.82.274.664 1.133-.273.82-1.094.703-.937-.235-2.148-.43-1.172-.156-2.305-.078-1.133.08-1.797.508-.585.352-.78 1.172-.119.664.077.977.157.312.664.664 1.172.625 3.203 1.094h.078q.938.234 1.875.546a7.1 7.1 0 0 1 1.758.743q.86.507 1.367 1.445.47.938.235 2.148-.508 2.07-2.5 2.735a6.2 6.2 0 0 1-2.11.43v1.913q-.078.86-.937.938-.86-.079-.937-.937v-1.954h-.196a.43.43 0 0 0-.195-.039 18 18 0 0 1-1.836-.39q-1.094-.273-1.914-.625-.742-.39-.469-1.211.43-.781 1.25-.508.665.312 1.602.547.938.234 1.64.351 2.11.274 3.399-.234 1.21-.507 1.367-1.367.117-.664-.078-.977-.157-.312-.664-.664-1.173-.624-3.203-1.094h-.079a25 25 0 0 1-1.874-.546 7.1 7.1 0 0 1-1.758-.743 3.66 3.66 0 0 1-1.367-1.445q-.47-.937-.235-2.148.352-1.64 1.64-2.422a5.8 5.8 0 0 1 2.618-.781h.351V7.437q.079-.859.938-.937.859.078.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneDollarSignBoldIcon);
export default ForwardRef;
