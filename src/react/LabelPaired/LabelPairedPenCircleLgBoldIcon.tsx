import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleLgBoldIcon = (
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
      <path d='M18.125 15.5q0-2.226-1.094-4.062-1.054-1.837-2.968-2.97A8.06 8.06 0 0 0 10 7.376a8.06 8.06 0 0 0-4.062 1.094q-1.915 1.133-2.97 2.969-1.092 1.835-1.093 4.062t1.094 4.063q1.054 1.836 2.969 2.968A8.06 8.06 0 0 0 10 23.625a8.06 8.06 0 0 0 4.063-1.094q1.913-1.132 2.968-2.968 1.095-1.837 1.094-4.063M0 15.5q.04-2.735 1.328-5Q2.657 8.235 5 6.828 7.383 5.5 10 5.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q2.657 22.765 1.328 20.5.038 18.235 0 15.5m13.984-4.531.547.547q.47.468.469 1.093 0 .626-.469 1.133l-.82.82-2.774-2.773.82-.82q.51-.47 1.095-.469.624 0 1.132.469m-8.046 5.82 4.101-4.102 2.774 2.774-4.102 4.102q-.235.234-.586.312l-2.344.586q-.351.078-.586-.156-.234-.235-.156-.586l.586-2.344q.078-.352.313-.586' />
    </g>
    <defs>
      <clipPath id='43f490440b931df1__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleLgBoldIcon);
export default ForwardRef;
