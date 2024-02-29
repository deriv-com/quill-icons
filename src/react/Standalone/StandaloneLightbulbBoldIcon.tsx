import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLightbulbBoldIcon = (
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
    <path d='M20.602 16.227q.858-1.25.898-2.852-.04-2.109-1.445-3.555-1.446-1.406-3.555-1.445-2.109.04-3.555 1.445-1.406 1.446-1.445 3.555.039 1.602.898 2.852.196.312.508.703a18.6 18.6 0 0 1 1.524 2.304q.585 1.133.742 2.266h-1.914a4.5 4.5 0 0 0-.469-1.367 19 19 0 0 0-1.328-1.992l-.625-.86q-1.172-1.68-1.211-3.906.079-2.93 2.031-4.844Q13.57 6.578 16.5 6.5q2.93.079 4.844 2.031 1.953 1.913 2.031 4.844-.04 2.227-1.21 3.906-.314.43-.626.82v.04a19 19 0 0 0-1.328 1.992q-.35.664-.469 1.367h-1.914q.157-1.132.742-2.266a22 22 0 0 1 1.563-2.304q.273-.39.469-.703M16.5 11.5q-.78.039-1.328.547-.508.546-.547 1.328-.039.585-.625.625-.585-.039-.625-.625.039-1.328.898-2.227.9-.858 2.227-.898.585.039.625.625-.039.585-.625.625m0 15q-1.328-.04-2.227-.898-.858-.9-.898-2.227v-.625h6.25v.625q-.04 1.328-.898 2.227-.9.858-2.227.898' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLightbulbBoldIcon);
export default ForwardRef;
