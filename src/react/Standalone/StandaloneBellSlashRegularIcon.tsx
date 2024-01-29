import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBellSlashRegularIcon = (
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
    <path d='m18.305 21.5 1.562 1.25H8.97q-.743 0-1.211-.508-.508-.469-.508-1.21 0-.704.508-1.25l.117-.079q1.836-1.914 1.875-4.57v-.39l1.25.976q-.273 2.813-2.266 4.844l-.078.117a.49.49 0 0 0-.156.351q.039.43.469.469zm-2.93-13.71v-.665q.039-.585.625-.625.585.039.625.625v.664q2.422.273 3.984 1.992Q22.211 11.5 22.25 14v1.133q.039 2.656 1.875 4.57l.117.078a.5.5 0 0 0 .078.117l-2.93-2.304a8 8 0 0 1-.39-2.461V14q-.04-2.109-1.445-3.555Q18.109 9.04 16 9q-2.148.038-3.555 1.484l-1.015-.78q1.562-1.642 3.945-1.915m-.547 16.64q.314.78 1.172.82.859-.04 1.172-.82.234-.547.82-.39.508.233.352.78a2.6 2.6 0 0 1-.899 1.211A2.34 2.34 0 0 1 16 26.5a2.34 2.34 0 0 1-1.445-.469 2.6 2.6 0 0 1-.899-1.21q-.156-.548.352-.782.585-.156.82.39M4.516 6.617l23.75 18.79q.429.39.117.859-.43.429-.899.117L3.734 7.633q-.429-.43-.117-.899.43-.39.899-.117' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBellSlashRegularIcon);
export default ForwardRef;
