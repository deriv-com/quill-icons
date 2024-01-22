import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneFloppyDiskPenRegularIcon = (
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
    <path d='M6 10.25v12.5c0 .365.117.664.352.898.234.235.533.352.898.352h7.89l-.312 1.25H7.25c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-12.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h9.61c.677 0 1.262.247 1.757.742l2.89 2.89c.496.496.743 1.095.743 1.798v1.914L21 16.344V13.18c0-.365-.117-.664-.352-.899l-2.93-2.93a1.066 1.066 0 0 0-.468-.273v3.672c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352H8.5c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898V9c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898M8.5 9v3.75H16V9zm3.125 10c.026.703.338 1.25.938 1.64.624.313 1.25.313 1.874 0 .6-.39.912-.937.938-1.64-.026-.703-.338-1.25-.937-1.64-.626-.313-1.25-.313-1.876 0-.598.39-.911.937-.937 1.64m1.875 3.125c-1.172-.026-2.07-.547-2.695-1.562-.573-1.042-.573-2.084 0-3.125.625-1.016 1.523-1.537 2.695-1.563 1.172.026 2.07.547 2.695 1.563.573 1.041.573 2.083 0 3.125-.625 1.015-1.523 1.536-2.695 1.562m11.523-5.312c-.312-.235-.611-.235-.898 0l-.977.976 1.563 1.563.977-.977c.234-.287.234-.573 0-.86zm-6.875 6.015a.492.492 0 0 0-.195.274l-.469 1.914 1.914-.47a.58.58 0 0 0 .274-.155l4.18-4.141-1.563-1.562zm5.118-6.875c.364-.39.794-.586 1.289-.586.52 0 .963.195 1.328.586l.703.664c.365.39.547.834.547 1.328 0 .495-.182.938-.547 1.328L20.57 25.29c-.234.234-.52.39-.86.469l-2.929.742c-.234.052-.43 0-.586-.156-.156-.183-.208-.39-.156-.625l.703-2.89c.104-.34.274-.639.508-.9z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFloppyDiskPenRegularIcon);
export default ForwardRef;
