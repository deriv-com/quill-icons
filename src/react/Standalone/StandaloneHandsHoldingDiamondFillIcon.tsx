import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneHandsHoldingDiamondFillIcon = (
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
    <path d='M15.102 6.89a1.205 1.205 0 0 1 1.757 0l3.75 3.75c.508.47.508 1.29 0 1.758l-3.75 3.75a1.205 1.205 0 0 1-1.757 0l-3.75-3.75a1.205 1.205 0 0 1 0-1.757zm-8.477 3.673v6.289c0 .664.234 1.289.703 1.757l1.992 1.993c.352.312.86.39 1.211.117.508-.313.586-1.055.156-1.485l-.585-.586-1.25-1.25a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l1.25 1.25.586.586 1.016.976c.82.82 1.289 1.953 1.289 3.125v3.047c0 1.055-.86 1.875-1.875 1.875h-2.617c-.664 0-1.29-.234-1.758-.703L4.594 21.89A3.8 3.8 0 0 1 3.5 19.234v-8.671C3.5 9.703 4.164 9 5.063 9c.859 0 1.562.703 1.562 1.563m18.75 0c0-.86.703-1.563 1.563-1.563.859 0 1.562.703 1.562 1.563v8.671c0 .977-.39 1.953-1.094 2.657L23.5 25.797c-.469.469-1.133.703-1.797.703h-2.578a1.85 1.85 0 0 1-1.875-1.875v-3.047c0-1.172.43-2.305 1.25-3.125l1.016-.976.586-.586 1.25-1.25a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-1.25 1.25-.586.586c-.43.43-.351 1.172.157 1.485.351.273.86.195 1.21-.117l1.993-1.993a2.49 2.49 0 0 0 .742-1.757v-6.289' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHandsHoldingDiamondFillIcon);
export default ForwardRef;
