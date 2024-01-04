import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneYoutubeIcon = (
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
      d='M26.734 11.344c.13.599.235 1.289.313 2.07.052.807.091 1.524.117 2.149V17.477a85.753 85.753 0 0 1-.117 2.109c-.078.807-.182 1.51-.313 2.11-.312.963-.95 1.588-1.914 1.874-.625.13-1.588.235-2.89.313-1.302.052-2.513.091-3.633.117h-3.594c-1.12-.026-2.33-.065-3.633-.117-1.302-.078-2.265-.182-2.89-.313-.964-.286-1.602-.911-1.914-1.875a18.4 18.4 0 0 1-.313-2.11 85.548 85.548 0 0 1-.117-2.108v-1.915c.026-.624.065-1.34.117-2.148.078-.781.182-1.471.313-2.07.312-.964.95-1.602 1.914-1.914.625-.13 1.588-.235 2.89-.313 1.302-.052 2.513-.091 3.633-.117h3.594c1.12.026 2.33.065 3.633.117 1.302.078 2.265.182 2.89.313.964.312 1.602.95 1.914 1.914Zm-12.422 8.36 5.586-3.204-5.585-3.164v6.367Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneYoutubeIcon);
export default ForwardRef;
