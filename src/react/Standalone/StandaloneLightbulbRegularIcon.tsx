import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLightbulbRegularIcon = (
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
    <path d='M21.11 16.578q.976-1.367 1.015-3.203-.078-2.383-1.64-3.984Q18.882 7.828 16.5 7.75q-2.383.078-3.984 1.64-1.563 1.602-1.641 3.985.04 1.836 1.016 3.203.156.234.351.508l.156.234q.04.039.04.078.78 1.017 1.445 2.149.508.976.664 1.953h-1.29a4 4 0 0 0-.468-1.328q-.585-1.054-1.328-2.031l-.625-.86q-1.172-1.68-1.211-3.906.079-2.93 2.031-4.844Q13.57 6.578 16.5 6.5q2.93.079 4.844 2.031 1.953 1.913 2.031 4.844-.04 2.227-1.21 3.906-.314.43-.626.82v.04a19 19 0 0 0-1.328 1.992q-.35.664-.469 1.367h-1.25a5.7 5.7 0 0 1 .625-1.953 22 22 0 0 1 1.445-2.227h.04q.273-.39.507-.742M16.5 10.25q-1.328.039-2.227.898-.858.9-.898 2.227-.039.585-.625.625-.585-.039-.625-.625.039-1.875 1.29-3.086Q14.624 9.04 16.5 9q.585.039.625.625-.039.585-.625.625M14.742 24q.47 1.172 1.758 1.25 1.29-.078 1.758-1.25zm-1.367-.625v-.195q.04-.39.43-.43h5.39q.39.04.43.43v.195q-.04 1.328-.898 2.227-.9.858-2.227.898-1.328-.04-2.227-.898-.858-.9-.898-2.227' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLightbulbRegularIcon);
export default ForwardRef;
