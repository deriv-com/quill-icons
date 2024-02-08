import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 10.75a6.3 6.3 0 0 0-.82-3.062 6.3 6.3 0 0 0-2.242-2.243 6.12 6.12 0 0 0-6.126 0 6.3 6.3 0 0 0-2.242 2.242 6.3 6.3 0 0 0-.82 3.063 6.3 6.3 0 0 0 .82 3.063 6.3 6.3 0 0 0 2.242 2.242 6.12 6.12 0 0 0 6.126 0 6.3 6.3 0 0 0 2.242-2.242q.792-1.395.82-3.063M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m7.328-3.5q.793.027 1.313.547t.547 1.312q-.028.847-.63 1.395.82.6.848 1.668-.027.875-.601 1.476-.602.575-1.477.602h-.656q-.875-.027-1.477-.602-.574-.6-.601-1.476.027-1.066.847-1.668-.6-.548-.628-1.395.027-.792.546-1.312.52-.52 1.313-.547zm-.656 2.844h.656q.41 0 .684-.301.3-.273.3-.684 0-.409-.3-.683a.89.89 0 0 0-.684-.301h-.656q-.41 0-.684.3-.3.274-.3.684t.3.684q.274.3.684.3m.656.875h-.656q-.52 0-.848.355a1.1 1.1 0 0 0-.355.848q0 .52.355.848.329.355.848.355h.656q.52 0 .848-.355.355-.33.355-.848 0-.52-.355-.848a1.1 1.1 0 0 0-.848-.355' />
    </g>
    <defs>
      <clipPath id='b44dbb72c0917cc30c123f16776577e6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightSmRegularIcon);
export default ForwardRef;
