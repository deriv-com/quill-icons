import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.805 20.5 1.562 1.25H5.47q-.743 0-1.211-.508-.508-.469-.508-1.21 0-.704.508-1.25l.117-.079q1.836-1.914 1.875-4.57v-.39l1.25.976q-.273 2.813-2.266 4.844l-.078.117A.49.49 0 0 0 5 20.03q.039.43.469.469zm-2.93-13.71v-.665q.039-.585.625-.625.585.039.625.625v.664q2.423.273 3.984 1.992Q18.711 10.5 18.75 13v1.133q.039 2.656 1.875 4.57l.117.078a.5.5 0 0 0 .078.117l-2.93-2.304a8 8 0 0 1-.39-2.461V13q-.04-2.109-1.445-3.555Q14.609 8.04 12.5 8q-2.148.038-3.555 1.484l-1.015-.78q1.562-1.642 3.945-1.915m-.547 16.64q.314.78 1.172.82.859-.04 1.172-.82.235-.547.82-.39.508.233.352.78a2.6 2.6 0 0 1-.899 1.211 2.34 2.34 0 0 1-1.445.469 2.34 2.34 0 0 1-1.445-.469 2.6 2.6 0 0 1-.899-1.21q-.156-.548.352-.782.585-.156.82.39M1.016 5.617l23.75 18.79q.429.39.117.859-.43.429-.899.117L.234 6.633q-.429-.43-.117-.899.43-.39.899-.117' />
    </g>
    <defs>
      <clipPath id='311022312123b70fe973e421dbe6c166__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashLgRegularIcon);
export default ForwardRef;
