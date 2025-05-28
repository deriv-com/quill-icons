import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneRotateDeviceRegularIcon = (
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
    <path d='m11.313 13.492 1.328-1.328-.274-.273-1.328 1.328zm11.015 3.906a1.63 1.63 0 0 1 0 2.227l-3.555 3.516a1.51 1.51 0 0 1-2.187 0l-7.07-7.07a1.51 1.51 0 0 1 0-2.188l3.515-3.555a1.63 1.63 0 0 1 2.227 0zm-9.219-5.664a.566.566 0 0 1 0 .82l-1.406 1.407a.522.522 0 0 1-.781 0l-.313-.313-.664.665c-.39.39-.39.976 0 1.328l7.07 7.07c.352.352.938.352 1.329 0l3.515-3.516c.391-.39.391-.976 0-1.328l-7.07-7.07c-.351-.39-.937-.39-1.328 0l-.664.664.312.312zm9.141-1.328a6.4 6.4 0 0 0-.977-.82l-.312-.234c-.43-.235-.82-.43-1.29-.586l-.429-.157-.43-.117c-.273-.078-.585-.117-.859-.156l1.602 1.64-.43.43-2.187-2.187-.508-.547h1.172c.468.039.898.117 1.328.195l.508.156.468.157c.469.156.938.39 1.367.664l.391.234c.352.274.703.547 1.016.899a7.79 7.79 0 0 1 2.304 5.507h-.625a7.16 7.16 0 0 0-2.109-5.078M9.555 23.102c.312.273.625.546.976.78l.352.235c.39.274.82.469 1.25.625l.43.156.468.118c.274.078.547.117.82.156l-1.601-1.64.43-.43 2.187 2.187.547.547h-.781l-.43-.04c-.43 0-.898-.077-1.328-.194l-.508-.118-.469-.156c-.468-.195-.937-.39-1.367-.664l-.351-.273c-.39-.235-.742-.547-1.055-.86a7.79 7.79 0 0 1-2.305-5.508h.625c0 1.836.703 3.672 2.11 5.079' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneRotateDeviceRegularIcon);
export default ForwardRef;
