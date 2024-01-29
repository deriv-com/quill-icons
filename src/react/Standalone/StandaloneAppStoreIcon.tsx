import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneAppStoreIcon = (
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
    <path d='m16 11.227-.352-.625q-.429-.586-1.093-.274-.585.43-.274 1.094l.781 1.406-2.578 4.492h-2.03q-.744.079-.821.82.078.704.82.782h7.227q.273-.547 0-1.055-.274-.507-.899-.547h-2.46l3.398-5.898q.312-.664-.274-1.094-.663-.312-1.093.274zm-3.086 8.515q-.625-.742-1.562-.469l-.586 1.016q-.313.664.312 1.055.664.312 1.094-.274zm6.602-2.422a5 5 0 0 1-.196-.351 279 279 0 0 0-2.148-3.711q-.39.312-.586 1.055-.156.78.312 1.64.469.82 1.133 1.992.782 1.328 1.797 3.125.43.585 1.094.274.586-.39.312-1.094l-.78-1.328h1.132q.742-.078.82-.781-.078-.743-.82-.82zM16 6.813q2.695.038 4.883 1.328a9.7 9.7 0 0 1 3.476 3.476q1.29 2.187 1.328 4.883-.038 2.695-1.328 4.883a9.7 9.7 0 0 1-3.476 3.476Q18.695 26.15 16 26.187q-2.695-.038-4.883-1.328a9.7 9.7 0 0 1-3.476-3.476Q6.35 19.195 6.313 16.5q.038-2.695 1.328-4.883a9.7 9.7 0 0 1 3.476-3.476Q13.304 6.85 16 6.813m8.438 9.687q-.08-3.594-2.461-5.977Q19.555 8.141 16 8.063q-3.594.078-5.977 2.46-2.382 2.422-2.46 5.977.078 3.594 2.46 5.977 2.422 2.382 5.977 2.46 3.594-.078 5.977-2.46 2.382-2.422 2.46-5.977' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneAppStoreIcon);
export default ForwardRef;
