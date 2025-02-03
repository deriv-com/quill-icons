import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.973 6.566c.52 0 .957.438.957.957v2.133q.204-.082.41-.082c.41 0 .765.246.957.574.082-.027.191-.027.273-.027.41 0 .766.246.957.547h.137c.602 0 1.094.492 1.094 1.094v1.64a1.92 1.92 0 0 1-1.914 1.914H9.52c-.41 0-.793-.082-1.149-.3l-.164-.055a2.47 2.47 0 0 1-1.285-2.188v-.328c0-.437.191-.82.547-1.093l.383-.274c.054-.055.109-.082.164-.137V7.523c0-.52.437-.957.957-.957m-.41.957v4.922a.294.294 0 0 1-.274.274.294.294 0 0 1-.273-.274v-.82l-.22.164c-.19.164-.327.383-.327.656v.328c0 .711.383 1.368 1.011 1.696l.137.082c.274.136.574.219.903.219h2.324c.765 0 1.367-.602 1.367-1.368v-1.64c0-.301-.246-.547-.547-.547-.055 0-.137 0-.191.055-.082 0-.164 0-.22-.028-.081-.027-.136-.11-.136-.164a.58.58 0 0 0-.547-.41.46.46 0 0 0-.273.082.32.32 0 0 1-.274.027c-.082-.054-.136-.136-.136-.218a.56.56 0 0 0-.547-.438.6.6 0 0 0-.465.246c-.055.11-.191.137-.3.11a.26.26 0 0 1-.192-.247V7.523a.42.42 0 0 0-.41-.41.403.403 0 0 0-.41.41m5.03 1.778 1.669-1.668a.264.264 0 0 0 0-.383l-1.668-1.668a.33.33 0 0 0-.383 0c-.11.11-.082.273 0 .383l1.23 1.23h-3.199a.245.245 0 0 0-.246.246c0 .137.11.274.246.274h3.2L13.21 8.918a.33.33 0 0 0 0 .383c.11.11.273.11.383 0m-8.75 0L3.177 7.633a.33.33 0 0 1 0-.383l1.668-1.668c.11-.11.273-.11.383 0s.109.273 0 .383l-1.23 1.203h3.198c.137 0 .274.137.274.273a.294.294 0 0 1-.274.274H3.996l1.23 1.203c.11.11.11.273 0 .383a.264.264 0 0 1-.382 0' />
    </g>
    <defs>
      <clipPath id='d27a8e87f28008015ab09f5bb412de88__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightSmRegularIcon);
export default ForwardRef;
