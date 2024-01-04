import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFileInvoiceDollarBoldIcon = (
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
      d='M21.625 24V12.75H18.5c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898V8.375H11c-.39.026-.599.234-.625.625v15c.026.39.234.599.625.625h10c.39-.026.599-.234.625-.625ZM8.5 9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h6.484c.677 0 1.263.247 1.758.742l3.516 3.516c.495.495.742 1.094.742 1.797V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H11c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9Zm7.5 5.938c.469.025.73.286.781.78v.391c.287.026.56.078.82.157.443.156.639.468.587.937-.157.443-.482.638-.977.586A6.874 6.874 0 0 0 16 17.594c-.338 0-.638.065-.898.195-.157.104-.222.182-.196.234 0 .026.052.066.156.118.26.13.626.247 1.094.351l.04.04h.038c.47.103.95.273 1.446.507.234.13.455.326.664.586.182.234.286.547.312.938-.052.807-.39 1.367-1.015 1.68-.26.155-.547.26-.86.312v.39c-.052.47-.312.73-.781.782-.469-.053-.73-.313-.781-.782v-.43a9.517 9.517 0 0 1-1.016-.273c-.026 0-.052-.013-.078-.039-.052 0-.091-.013-.117-.039h-.117c-.443-.182-.612-.508-.508-.977.182-.442.508-.625.976-.546.053.026.118.052.196.078h.078c.495.182.963.286 1.406.312.365 0 .651-.052.86-.156.156-.104.22-.195.195-.273.026-.026-.04-.092-.196-.196-.26-.13-.625-.26-1.093-.39h-.078a5.427 5.427 0 0 1-1.368-.508 2.337 2.337 0 0 1-.703-.547c-.182-.234-.286-.547-.312-.938 0-.416.104-.755.312-1.015a1.88 1.88 0 0 1 .742-.625c.26-.13.534-.221.82-.274v-.39c.053-.495.313-.755.782-.781Zm-3.75-4.688h3.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625H12.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Zm0 2.5h3.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625H12.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileInvoiceDollarBoldIcon);
export default ForwardRef;
