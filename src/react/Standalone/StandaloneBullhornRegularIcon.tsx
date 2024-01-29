import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBullhornRegularIcon = (
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
    <path d='M22.25 8.219q0-.195-.195-.274-.195-.078-.352.078L20.766 9a11.9 11.9 0 0 1-6.016 3.438v6.914q3.516.78 6.016 3.398l.937.977q.156.156.352.078t.195-.274zM13.5 19.117v-6.484q-.351.039-.664.039l-1.172.078H8.5q-.547 0-.898.352-.352.35-.352.898v3.75q0 .547.352.898.35.352.898.352h3.165l1.132.078q.351 0 .703.04m7.305-11.953q.82-.742 1.718-.39.9.351.977 1.445V23.53q-.078 1.094-.977 1.446-.898.351-1.718-.391l-.938-.977q-2.617-2.734-6.367-3.242v3.945q-.039.938-.625 1.563-.625.585-1.562.625h-.626q-.936-.039-1.562-.625-.585-.625-.625-1.562V20.25q-1.055-.039-1.758-.742Q6.04 18.804 6 17.75V14q.039-1.055.742-1.758T8.5 11.5h3.125l1.133-.078a11 11 0 0 0 3.867-.938 10.7 10.7 0 0 0 3.242-2.343zM9.75 20.25v4.063q.078.858.938.937h.624q.86-.079.938-.937v-4.024l-.625-.039zM25.375 14q.585.039.625.625v2.5q-.039.585-.625.625-.585-.039-.625-.625v-2.5q.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBullhornRegularIcon);
export default ForwardRef;
