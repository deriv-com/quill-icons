import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessagesQuestionSmRegularIcon = (
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
      <path d='M5.773 11.625h4.102a.88.88 0 0 0 .875-.875V5.5a.9.9 0 0 0-.875-.875H2a.88.88 0 0 0-.875.875v5.25c0 .492.383.875.875.875h.875a.9.9 0 0 1 .875.875v.438l1.504-1.122c.164-.109.328-.191.52-.191m4.102.875H5.773L3.56 14.168c-.137.11-.301.11-.465.055a.45.45 0 0 1-.219-.41V12.5H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h7.875c.957 0 1.75.793 1.75 1.75v5.25c0 .984-.793 1.75-1.75 1.75M9 16c-.984 0-1.75-.766-1.75-1.75v-.875h.875v.875c0 .492.383.875.875.875h3.2c.19 0 .382.082.519.191l1.531 1.121V16c0-.465.383-.875.875-.875H16a.88.88 0 0 0 .875-.875V9A.9.9 0 0 0 16 8.125h-3.5V7.25H16c.957 0 1.75.793 1.75 1.75v5.25c0 .984-.793 1.75-1.75 1.75h-.875v1.313c0 .19-.11.328-.246.41-.164.054-.328.054-.465-.055L12.2 16zM5.281 5.691c-.465 0-.847.274-1.011.684v.027a.46.46 0 0 0 .273.575c.219.082.465-.055.547-.274l.027-.027c0-.082.082-.11.164-.11h1.121c.192 0 .328.137.328.301 0 .137-.054.246-.164.301l-.847.492a.44.44 0 0 0-.219.383v.246c0 .246.191.438.438.438a.45.45 0 0 0 .437-.438l.629-.383c.383-.191.601-.601.601-1.011 0-.684-.546-1.204-1.203-1.204zm.657 4.922a.53.53 0 0 0 .546-.3.53.53 0 0 0 0-.63c-.109-.19-.328-.328-.546-.3a.59.59 0 0 0-.575.3.53.53 0 0 0 0 .63.55.55 0 0 0 .574.3' />
    </g>
    <defs>
      <clipPath id='6f15e70e36152f554458ef2ea024620a__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessagesQuestionSmRegularIcon);
export default ForwardRef;
