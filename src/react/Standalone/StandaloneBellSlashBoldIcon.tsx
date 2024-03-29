import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBellSlashBoldIcon = (
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
    <path d='m4.984 6.734 5.782 4.493c.898-1.368 2.304-2.383 3.984-2.696V7.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v.781c2.852.547 5 3.086 5 6.094v1.016c0 1.757.586 3.476 1.68 4.882l.586.704c.195.273.273.625.156.898l3.437 2.734c.43.313.508.899.157 1.29-.313.43-.899.507-1.29.156L3.853 8.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m7.266 5.664 8.828 6.915a9.6 9.6 0 0 1-.703-3.672v-1.016c0-2.383-1.992-4.375-4.375-4.375-1.602 0-3.008.86-3.75 2.148m7.11 10.352H8.187c-.391 0-.704-.195-.86-.508-.156-.312-.117-.703.117-1.015l.586-.704c1.094-1.406 1.719-3.125 1.719-4.882v-.43l1.797 1.406c-.156 1.524-.664 3.008-1.485 4.258h6.915zM18.5 24c0 .664-.273 1.328-.742 1.797S16.664 26.5 16 26.5s-1.328-.234-1.797-.703S13.5 24.664 13.5 24h5' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBellSlashBoldIcon);
export default ForwardRef;
