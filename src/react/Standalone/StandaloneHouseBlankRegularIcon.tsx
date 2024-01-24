import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneHouseBlankRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M15.57 6.656q.43-.312.86 0l10.625 9.375q.39.43.039.899-.43.39-.899.039l-1.445-1.29v7.696q-.04 1.328-.898 2.227-.9.858-2.227.898h-11.25q-1.328-.04-2.227-.898-.859-.9-.898-2.227V15.68l-1.445 1.289q-.469.351-.899-.04-.351-.468.04-.898zm-7.07 7.93v8.789q.039.78.547 1.328.546.508 1.328.547h11.25q.78-.039 1.328-.547.508-.546.547-1.328v-8.79L16 7.946z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHouseBlankRegularIcon);
export default ForwardRef;
