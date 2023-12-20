import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.125 6.75h15c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-15c-.52.026-.964.208-1.328.547-.339.364-.521.807-.547 1.328v11.25c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h13.75c.52-.026.963-.208 1.328-.547.339-.364.521-.807.547-1.328v-8.75a2.038 2.038 0 0 0-.547-1.328 2.038 2.038 0 0 0-1.328-.547h-12.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h12.5c.885.026 1.628.326 2.227.898.572.6.872 1.342.898 2.227v8.75c-.026.885-.326 1.628-.898 2.227-.6.572-1.342.872-2.227.898H3.125c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227V9.875c.026-.885.326-1.628.898-2.227.6-.572 1.342-.872 2.227-.898M15 17.688c-.573-.053-.885-.365-.937-.938.052-.573.364-.885.937-.937.573.052.885.364.938.937-.053.573-.365.885-.938.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletLgRegularIcon);
export default ForwardRef;
