import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUnlockRegularIcon = (
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
    <path d='M12.25 11.5V14h9.375q1.328.039 2.227.898.858.9.898 2.227v6.25q-.04 1.328-.898 2.227-.9.858-2.227.898h-11.25q-1.328-.04-2.227-.898-.859-.9-.898-2.227v-6.25q.04-1.328.898-2.227.9-.858 2.227-.898H11v-2.5q.04-2.109 1.445-3.555Q13.891 6.54 16 6.5q1.719.04 3.008 1.016 1.29.976 1.797 2.578.117.547-.43.742-.586.117-.781-.39a3.67 3.67 0 0 0-1.328-1.954Q17.289 7.79 16 7.75q-1.602.039-2.656 1.094-1.055 1.054-1.094 2.656M8.5 17.125v6.25q.039.78.547 1.328.546.508 1.328.547h11.25q.78-.039 1.328-.547.508-.546.547-1.328v-6.25a2.04 2.04 0 0 0-.547-1.328 2.04 2.04 0 0 0-1.328-.547h-11.25q-.781.039-1.328.547-.508.546-.547 1.328' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUnlockRegularIcon);
export default ForwardRef;
