import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.125 15.5q0-2.226-1.094-4.062-1.054-1.837-2.968-2.97A8.06 8.06 0 0 0 10 7.376a8.06 8.06 0 0 0-4.062 1.094q-1.915 1.133-2.97 2.969-1.092 1.835-1.093 4.062t1.094 4.063q1.054 1.836 2.969 2.968A8.06 8.06 0 0 0 10 23.625a8.06 8.06 0 0 0 4.063-1.094q1.913-1.132 2.968-2.968 1.095-1.837 1.094-4.063M0 15.5q.04-2.735 1.328-5Q2.657 8.235 5 6.828 7.383 5.5 10 5.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q2.657 22.765 1.328 20.5.038 18.235 0 15.5m10.313-5q1.21.04 1.992.82.78.782.82 1.992 0 .938-.508 1.641 1.095.899 1.133 2.422-.039 1.328-.898 2.227-.9.858-2.227.898h-1.25q-1.328-.04-2.227-.898-.859-.9-.898-2.227.04-1.524 1.172-2.422a2.6 2.6 0 0 1-.547-1.64q.04-1.212.82-1.993.782-.78 1.992-.82zm-.626 3.75h.626q.858-.079.937-.937-.079-.86-.937-.938h-.626q-.858.078-.937.938.078.858.938.937m.626 1.875h-.938q-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352h1.25q.547 0 .898-.352.352-.35.352-.898 0-.547-.352-.898-.35-.352-.898-.352z' />
    </g>
    <defs>
      <clipPath id='26cc60a5c304ff5669efe06c93c56018__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightLgBoldIcon);
export default ForwardRef;
