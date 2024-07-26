import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossSmFillIcon = (
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
      <path d='M4.27 14.66a4.4 4.4 0 0 1-1.258-.957l-.274-.328 1.668-1.668.301.328c.41.492.902.711 1.504.711.355 0 .52-.082.601-.137.083-.082.11-.164.11-.3 0-.137-.027-.192-.055-.246-.027 0-.027-.028-.082-.055a1 1 0 0 0-.328-.055l-.71-.11c-.849-.109-1.532-.355-1.97-.82H3.75c-.437-.492-.629-1.093-.629-1.804 0-.383.055-.739.219-1.067s.383-.629.656-.875c.274-.218.629-.41 1.012-.52.383-.136.82-.19 1.285-.19.602 0 1.148.081 1.64.3.465.192.876.492 1.231.875l.274.301L7.77 9.738l-.329-.355A2.4 2.4 0 0 0 6.95 9h-.027a1.5 1.5 0 0 0-.711-.164c-.328 0-.492.082-.547.11-.055.054-.082.081-.082.19 0 .083.027.137.027.165s.028.027.028.027c.054.055.191.11.465.164l.71.11c.793.109 1.477.382 1.915.82.464.437.683 1.066.683 1.777 0 .41-.082.793-.219 1.149a2.5 2.5 0 0 1-.683.902c-.274.246-.63.438-1.04.574-.41.137-.874.192-1.34.192-.71 0-1.312-.11-1.831-.356zm5.578.246V6.703h2.488v5.906h2.789v2.297z' />
    </g>
    <defs>
      <clipPath id='2c46c7c8496787e30ae9b0bb9b133508__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossSmFillIcon);
export default ForwardRef;
