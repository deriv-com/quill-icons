import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTriangleExclamationBoldIcon = (
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
      d='M15.688 9.781 7.953 22.516a.556.556 0 0 0-.078.312c.026.339.221.521.586.547h15.117c.339-.026.521-.208.547-.547a.693.693 0 0 0-.078-.312L16.312 9.78A.371.371 0 0 0 16 9.625a.371.371 0 0 0-.312.156m-1.602-.976c.469-.677 1.107-1.029 1.914-1.055.833.026 1.471.378 1.914 1.055l7.734 12.734c.235.39.352.82.352 1.29-.026.676-.26 1.25-.703 1.718-.469.443-1.042.677-1.719.703H8.461c-.703-.026-1.29-.26-1.758-.703-.443-.469-.677-1.042-.703-1.719 0-.469.117-.898.352-1.289zm3.164 12.07c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898s.117-.664.352-.898c.234-.235.533-.352.898-.352s.664.117.898.352c.235.234.352.533.352.898m-.312-7.187v3.75c-.053.572-.365.885-.938.937-.573-.052-.885-.365-.937-.937v-3.75c.052-.573.364-.886.937-.938.573.052.885.365.938.938'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTriangleExclamationBoldIcon);
export default ForwardRef;
