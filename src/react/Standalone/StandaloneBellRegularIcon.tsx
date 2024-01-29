import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBellRegularIcon = (
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
    <path d='M15.375 7.125q.039-.585.625-.625.585.039.625.625v.664q2.422.273 3.984 1.992Q22.211 11.5 22.25 14v1.133q.039 2.656 1.875 4.57l.117.117q.508.508.508 1.211 0 .743-.508 1.211-.469.508-1.21.508H8.968q-.743 0-1.211-.508-.508-.469-.508-1.21 0-.704.508-1.25l.117-.079q1.836-1.914 1.875-4.57V14q.04-2.5 1.64-4.219 1.563-1.719 3.985-1.992zM16 9q-2.109.04-3.555 1.445Q11.04 11.891 11 14v1.133q-.039 3.165-2.266 5.43l-.078.117a.49.49 0 0 0-.156.351q.039.43.469.469H23.03q.43-.039.469-.469a.49.49 0 0 0-.156-.351l-.078-.117q-2.227-2.265-2.266-5.43V14q-.038-2.109-1.484-3.555Q18.109 9.04 16 9m-1.172 15.43q.314.78 1.172.82.859-.04 1.172-.82.234-.547.82-.39.508.233.352.78a2.6 2.6 0 0 1-.899 1.211A2.34 2.34 0 0 1 16 26.5a2.34 2.34 0 0 1-1.445-.469 2.6 2.6 0 0 1-.899-1.21q-.156-.548.352-.782.585-.156.82.39' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBellRegularIcon);
export default ForwardRef;
