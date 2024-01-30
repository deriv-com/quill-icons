import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.438 7.906q0 .848-.383 1.559a3.4 3.4 0 0 1-1.067 1.148q.848.411 1.367 1.203.52.794.52 1.778-.027 1.394-.957 2.324t-2.324.957H3.406q-1.395-.027-2.324-.957-.93-.93-.957-2.324 0-.984.52-1.778.52-.793 1.367-1.203A3.4 3.4 0 0 1 .945 9.465a3.24 3.24 0 0 1-.382-1.559q.027-1.394.957-2.324t2.324-.957h1.312q1.395.027 2.324.957.93.93.957 2.324m-3.282 3.282h-1.75q-1.012.027-1.695.71-.684.684-.711 1.696.027 1.012.71 1.695.685.684 1.696.711h2.188q1.012-.027 1.695-.71.684-.685.711-1.696-.027-1.012-.71-1.696-.685-.683-1.696-.71zm0-.876q1.012-.027 1.696-.71.683-.684.71-1.696-.027-1.012-.71-1.695-.684-.684-1.696-.711H3.844q-1.012.027-1.696.71-.683.685-.71 1.696.027 1.012.71 1.696.684.683 1.696.71z' />
    </g>
    <defs>
      <clipPath id='8b34f97a4b39ab3867c9aaf6d666bf38__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightSmRegularIcon);
export default ForwardRef;
