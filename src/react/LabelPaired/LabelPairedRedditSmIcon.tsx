import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditSmIcon = (
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
      <path d='M5.523 12.117q-.629-.082-.683-.683.054-.63.683-.684.601.055.657.684-.056.601-.657.683m8.258-1.367q-.027 1.887-.93 3.418a6.8 6.8 0 0 1-2.433 2.434q-1.53.901-3.418.93-1.887-.029-3.418-.93a6.77 6.77 0 0 1-2.434-2.434q-.901-1.53-.93-3.418.028-1.887.93-3.418a6.77 6.77 0 0 1 2.434-2.434q1.53-.901 3.418-.93 1.887.028 3.418.93a6.77 6.77 0 0 1 2.434 2.434q.902 1.53.93 3.418m-3.61-1.121q-.41 0-.655.273-.957-.655-2.352-.738l.465-2.133 1.531.328q.055.63.656.684.63-.054.684-.684-.055-.629-.684-.683a.7.7 0 0 0-.601.383l-1.668-.383q-.137 0-.192.136l-.52 2.352q-1.394.082-2.35.738-.247-.273-.657-.273-.71.054-.875.684-.137.628.492 1.039a1.5 1.5 0 0 0-.054.41q.054 1.12 1.066 1.832 1.012.738 2.543.765 1.531-.027 2.57-.765 1.012-.711 1.067-1.832 0-.219-.055-.438.601-.383.465-1.011-.165-.63-.875-.684M8.286 12.8q-.438.383-1.285.383-.847-.028-1.285-.383-.11-.083-.219 0-.11.136 0 .246.547.465 1.504.465.958 0 1.504-.465.11-.11 0-.246-.11-.083-.219 0m.219-2.051q-.63.055-.684.684.056.601.684.683.601-.082.656-.683-.054-.63-.656-.684' />
    </g>
    <defs>
      <clipPath id='094359e96b8ea1c4eed2857dc3dcd987__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditSmIcon);
export default ForwardRef;
