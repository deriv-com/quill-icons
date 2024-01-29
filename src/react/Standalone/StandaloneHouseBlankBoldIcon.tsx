import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneHouseBlankBoldIcon = (
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
    <path d='m16.625 6.734 10.313 8.75q.585.587.078 1.329-.586.585-1.29.078l-.976-.782v7.266q-.04 1.328-.898 2.227-.9.858-2.227.898h-11.25q-1.328-.04-2.227-.898-.859-.9-.898-2.227v-7.266l-.977.782q-.702.507-1.289-.078-.507-.742.079-1.329l10.312-8.75q.625-.468 1.25 0m6.25 7.774L16 8.688l-6.875 5.82v8.867q0 .547.352.898.35.352.898.352h11.25q.547 0 .898-.352.352-.35.352-.898z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHouseBlankBoldIcon);
export default ForwardRef;
