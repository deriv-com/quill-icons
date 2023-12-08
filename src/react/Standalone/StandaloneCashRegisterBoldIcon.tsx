import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCashRegisterBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='M8.5 6.5h8.75c.365 0 .664.117.898.352.235.234.352.533.352.898v2.5c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352h-3.125v1.25h8.438c.65 0 1.197.208 1.64.625.469.39.755.898.86 1.523l.898 6.446c.026.104.039.221.039.351V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C6.273 25.289 6.026 24.703 6 24v-2.5c0-.052.013-.104.04-.156l.897-6.446c.105-.625.391-1.132.86-1.523.443-.417.99-.625 1.64-.625h2.188V11.5H8.5c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898v-2.5c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352Zm1.25 1.875c-.39.026-.599.234-.625.625.026.39.234.599.625.625H16c.39-.026.599-.234.625-.625-.026-.39-.234-.599-.625-.625H9.75ZM7.875 24c.026.39.234.599.625.625h15c.39-.026.599-.234.625-.625v-.625H7.875V24Zm15.313-8.828c-.053-.339-.248-.521-.586-.547H9.437c-.364.026-.572.208-.624.547L7.913 21.5h16.211l-.938-6.328Zm-12.813.39c.573.053.885.365.938.938-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938.053-.573.365-.885.938-.938Zm2.813.938c.052-.573.364-.885.937-.938.573.053.885.365.938.938-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938Zm-.938 2.188c.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938.053-.573.365-.885.938-.938Zm4.688-2.188c.052-.573.364-.885.937-.938.573.053.885.365.938.938-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938ZM16 18.688c.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938.053-.573.365-.885.938-.938Zm4.688-2.188c.052-.573.364-.885.937-.938.573.053.885.365.938.938-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938Zm-.938 2.188c.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.938-.938.053-.573.365-.885.938-.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCashRegisterBoldIcon);
export default ForwardRef;