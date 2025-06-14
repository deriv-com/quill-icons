import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightSmRegularIcon = (
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
      <path d='M14.852 4.625a.294.294 0 0 0-.274.273v11.73c0 .138.137.247.274.247.136 0 .273-.11.273-.246V4.899a.294.294 0 0 0-.273-.274m-.602 4.813c0 .93-.71 1.667-1.613 1.75l-1.012 2.16c.027.054.082.109.11.191l.218.41c.192.383.192.82.027 1.203l-.164.329c-.382.82-1.203 1.367-2.078 1.394h-.164a2.4 2.4 0 0 1-1.176-.219l-2.105-1.011a1.887 1.887 0 0 1-.902-2.543l.683-1.477c.274-.547.93-.793 1.477-.52 0 0 .027.028.054.028.028.027.055.027.055.055.328-.22.738-.274 1.094-.11.11.027.164.082.246.137a1.16 1.16 0 0 1 1.121-.11c.137.055.246.165.328.247l.492-1.067a1.7 1.7 0 0 1-.218-.848c0-.957.793-1.75 1.75-1.75.984 0 1.75.793 1.75 1.75zm-1.148.82-.165.328c.465-.164.766-.629.766-1.149 0-.656-.547-1.203-1.203-1.203-.684 0-1.23.547-1.23 1.204v.19l.082-.19c.218-.465.82-.684 1.285-.465.465.218.683.82.465 1.285m-2.625 4.21 2.132-4.456a.43.43 0 0 0-.218-.547.446.446 0 0 0-.547.191l-1.149 2.461c-.054.11-.164.164-.273.137-.137-.027-.219-.11-.246-.219a.57.57 0 0 0-.301-.437.524.524 0 0 0-.656.191.35.35 0 0 1-.246.11c-.082 0-.164-.055-.22-.137a.7.7 0 0 0-.218-.192.55.55 0 0 0-.656.137c-.055.055-.11.11-.191.11-.083 0-.165-.055-.22-.083-.054-.054-.109-.109-.163-.136a.585.585 0 0 0-.739.273l-.683 1.477a1.367 1.367 0 0 0 .629 1.832l2.105.984c.301.137.602.191.93.164l.164.027a1.96 1.96 0 0 0 1.613-1.12l.164-.301c.11-.246.082-.493-.027-.739l-.137-.246-.355.739c-.055.164-.219.218-.356.136-.11-.054-.191-.219-.136-.355' />
    </g>
    <defs>
      <clipPath id='3eb654cf41eab769d296e6bd2407868b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightSmRegularIcon);
export default ForwardRef;
