import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUnlockBoldIcon = (
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
    <path d='M12.875 11.5V14h9.375q1.055.039 1.758.742t.742 1.758V24q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742Q7.29 25.054 7.25 24v-7.5q.039-1.055.742-1.758T9.75 14H11v-2.5q.04-2.109 1.445-3.555Q13.891 6.54 16 6.5q1.68.04 2.969.977 1.29.937 1.797 2.5.195.82-.625 1.171-.82.195-1.172-.625A3.08 3.08 0 0 0 17.875 9 3 3 0 0 0 16 8.375q-1.328.04-2.227.898-.858.9-.898 2.227m-3.75 5V24q.039.585.625.625h12.5q.585-.039.625-.625v-7.5q-.039-.585-.625-.625H9.75q-.585.039-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUnlockBoldIcon);
export default ForwardRef;
