import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneGridBoldIcon = (
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
      d='M10.688 9.313H8.812v1.874h1.876V9.313ZM8.812 7.75h1.876c.442 0 .807.156 1.093.469.313.286.469.65.469 1.094v1.874c0 .443-.156.808-.469 1.094a1.418 1.418 0 0 1-1.094.469H8.813c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.094V9.313c0-.443.156-.808.469-1.094a1.418 1.418 0 0 1 1.093-.469Zm1.876 7.813H8.812v1.874h1.876v-1.875ZM8.812 14h1.876c.442 0 .807.156 1.093.469.313.286.469.65.469 1.094v1.874c0 .443-.156.808-.469 1.094a1.418 1.418 0 0 1-1.094.469H8.813c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.093v-1.875c0-.443.156-.808.469-1.094A1.418 1.418 0 0 1 8.812 14Zm0 7.813v1.875h1.876v-1.875H8.812Zm-1.562 0c0-.443.156-.808.469-1.094a1.418 1.418 0 0 1 1.093-.469h1.876c.442 0 .807.156 1.093.469.313.286.469.65.469 1.093v1.875c0 .443-.156.808-.469 1.094a1.418 1.418 0 0 1-1.094.469H8.813c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.093v-1.875Zm9.688-12.5h-1.875v1.874h1.874V9.313ZM15.063 7.75h1.874c.443 0 .808.156 1.094.469.313.286.469.65.469 1.094v1.874c0 .443-.156.808-.469 1.094a1.418 1.418 0 0 1-1.093.469h-1.875c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.094V9.313c0-.443.156-.808.469-1.094a1.418 1.418 0 0 1 1.094-.469Zm0 7.813v1.874h1.874v-1.875h-1.875Zm-1.563 0c0-.443.156-.808.469-1.094A1.418 1.418 0 0 1 15.063 14h1.874c.443 0 .808.156 1.094.469.313.286.469.65.469 1.094v1.874c0 .443-.156.808-.469 1.094a1.418 1.418 0 0 1-1.093.469h-1.875c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.093v-1.875Zm3.438 6.25h-1.875v1.875h1.874v-1.875Zm-1.875-1.563h1.874c.443 0 .808.156 1.094.469.313.286.469.65.469 1.093v1.875c0 .443-.156.808-.469 1.094a1.418 1.418 0 0 1-1.093.469h-1.875c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.093v-1.875c0-.443.156-.808.469-1.094a1.418 1.418 0 0 1 1.094-.469Zm6.25-10.938v1.876h1.875V9.312h-1.875Zm-1.563 0c0-.442.156-.807.469-1.093a1.418 1.418 0 0 1 1.093-.469h1.875c.443 0 .808.156 1.094.469.313.286.469.65.469 1.094v1.874c0 .443-.156.808-.469 1.094a1.418 1.418 0 0 1-1.093.469h-1.875c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.094V9.313Zm3.438 6.25h-1.875v1.876h1.875v-1.875ZM21.313 14h1.875c.442 0 .807.156 1.093.469.313.286.469.65.469 1.094v1.874c0 .443-.156.808-.469 1.094a1.418 1.418 0 0 1-1.093.469h-1.875c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.093v-1.875c0-.443.156-.808.469-1.094A1.418 1.418 0 0 1 21.312 14Zm0 7.813v1.875h1.875v-1.875h-1.875Zm-1.563 0c0-.443.156-.808.469-1.094a1.418 1.418 0 0 1 1.093-.469h1.875c.443 0 .808.156 1.094.469.313.286.469.65.469 1.093v1.875c0 .443-.156.808-.469 1.094a1.418 1.418 0 0 1-1.093.469h-1.875c-.443 0-.808-.156-1.094-.469a1.418 1.418 0 0 1-.469-1.093v-1.875Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGridBoldIcon);
export default ForwardRef;