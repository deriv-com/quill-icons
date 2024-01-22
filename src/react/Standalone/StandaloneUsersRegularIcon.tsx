import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneUsersRegularIcon = (
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
    <path d='M7.25 9.625c.026.703.339 1.25.938 1.64.624.313 1.25.313 1.874 0 .6-.39.912-.937.938-1.64-.026-.703-.338-1.25-.937-1.64-.626-.313-1.25-.313-1.876 0-.598.39-.911.937-.937 1.64m5 0c-.026 1.172-.547 2.07-1.562 2.695-1.042.573-2.084.573-3.126 0C6.548 11.695 6.027 10.797 6 9.625c.026-1.172.547-2.07 1.563-2.695 1.041-.573 2.083-.573 3.125 0 1.015.625 1.536 1.523 1.562 2.695M16 12.75c-.937.026-1.654.443-2.148 1.25-.47.833-.47 1.667 0 2.5.494.807 1.21 1.224 2.148 1.25.938-.026 1.654-.443 2.148-1.25.47-.833.47-1.667 0-2.5-.494-.807-1.21-1.224-2.148-1.25M16 19a3.62 3.62 0 0 1-1.875-.508 3.759 3.759 0 0 1-1.875-3.242 3.759 3.759 0 0 1 1.875-3.242A3.62 3.62 0 0 1 16 11.5c.677 0 1.302.17 1.875.508a3.759 3.759 0 0 1 1.875 3.242 3.759 3.759 0 0 1-1.875 3.242A3.62 3.62 0 0 1 16 19m-2.305 2.5c-1.067.026-1.979.39-2.734 1.094-.73.703-1.133 1.588-1.211 2.656h12.5c-.078-1.068-.482-1.953-1.21-2.656-.756-.703-1.668-1.068-2.735-1.094zm0-1.25h4.61c1.458.026 2.682.534 3.672 1.523.99.99 1.497 2.214 1.523 3.672-.052.651-.404 1.003-1.055 1.055H9.555c-.651-.052-1.003-.404-1.055-1.055.026-1.458.534-2.682 1.523-3.672.99-.99 2.214-1.497 3.672-1.523M23.5 7.75c-.703.026-1.25.339-1.64.938-.313.624-.313 1.25 0 1.874.39.6.937.912 1.64.938.703-.026 1.25-.338 1.64-.937.313-.626.313-1.25 0-1.876-.39-.598-.937-.911-1.64-.937m0 5c-1.172-.026-2.07-.547-2.695-1.562-.573-1.042-.573-2.084 0-3.126.625-1.015 1.523-1.536 2.695-1.562 1.172.026 2.07.547 2.695 1.563.573 1.041.573 2.083 0 3.124-.625 1.016-1.523 1.537-2.695 1.563m.625 2.5H21c0-.443-.052-.86-.156-1.25h3.281c1.25.026 2.279.456 3.086 1.29.833.806 1.263 1.835 1.289 3.085-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625-.026-.885-.326-1.628-.898-2.227-.6-.572-1.342-.872-2.227-.898M11 15.25H7.875c-.885.026-1.628.325-2.227.898-.572.6-.872 1.342-.898 2.227-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625.026-1.25.456-2.279 1.29-3.086.806-.833 1.835-1.263 3.085-1.289h3.281c-.104.39-.156.807-.156 1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUsersRegularIcon);
export default ForwardRef;
