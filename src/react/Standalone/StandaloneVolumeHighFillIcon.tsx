import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneVolumeHighFillIcon = (
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
    <path d='M24.32 7.79c2.54 2.07 4.18 5.194 4.18 8.71 0 3.555-1.64 6.68-4.18 8.75a.94.94 0 0 1-1.328-.156c-.312-.39-.234-.977.156-1.29a9.39 9.39 0 0 0 3.477-7.304c0-2.93-1.367-5.547-3.477-7.266-.39-.312-.468-.898-.156-1.328a.974.974 0 0 1 1.328-.117m-2.343 2.89c1.68 1.406 2.773 3.476 2.773 5.82a7.46 7.46 0 0 1-2.773 5.82.93.93 0 0 1-1.329-.117c-.351-.39-.273-.976.118-1.328a5.52 5.52 0 0 0 2.109-4.375 5.5 5.5 0 0 0-2.11-4.336.974.974 0 0 1-.117-1.328c.313-.39.899-.469 1.329-.156m-2.383 2.93c.86.703 1.406 1.718 1.406 2.89 0 1.21-.547 2.227-1.406 2.93a.94.94 0 0 1-1.328-.157c-.313-.39-.235-.976.156-1.289.43-.351.703-.898.703-1.484s-.273-1.094-.703-1.445c-.39-.313-.469-.899-.156-1.328a.974.974 0 0 1 1.328-.118m-4.336-5.743c.43.196.742.664.742 1.133v15c0 .508-.312.938-.742 1.172a1.26 1.26 0 0 1-1.367-.235L8.617 20.25H6a2.47 2.47 0 0 1-2.5-2.5v-2.5c0-1.367 1.094-2.5 2.5-2.5h2.617l5.274-4.648c.39-.352.898-.43 1.367-.235' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneVolumeHighFillIcon);
export default ForwardRef;
