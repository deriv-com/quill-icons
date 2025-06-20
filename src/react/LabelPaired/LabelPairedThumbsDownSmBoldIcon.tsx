import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownSmBoldIcon = (
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
      <path d='M8.832 16.82c-1.039.301-2.133-.328-2.434-1.367l-.136-.547c-.11-.355-.301-.683-.547-.957L4.32 12.418a.68.68 0 0 1 .028-.93.653.653 0 0 1 .93.055l1.421 1.531c.383.41.656.93.82 1.477l.137.547c.11.355.465.547.82.464a.684.684 0 0 0 .465-.82l-.164-.547a5.3 5.3 0 0 0-.738-1.53c-.137-.192-.137-.466-.027-.684a.64.64 0 0 1 .574-.356h3.664a.45.45 0 0 0 .438-.437c0-.165-.137-.329-.301-.41-.192-.055-.356-.247-.41-.438a.62.62 0 0 1 .164-.602c.054-.082.109-.164.109-.3a.44.44 0 0 0-.355-.41c-.247-.055-.438-.22-.493-.41a.7.7 0 0 1 .082-.657.42.42 0 0 0 .11-.274c0-.164-.137-.328-.301-.41-.3-.109-.465-.437-.383-.765 0-.055.027-.082.027-.137a.47.47 0 0 0-.437-.437H7.82c-.355 0-.683.109-.957.3L5.168 7.36a.613.613 0 0 1-.902-.191c-.22-.3-.137-.684.164-.902l1.695-1.121a3.1 3.1 0 0 1 1.695-.52h2.68c.93 0 1.695.766 1.75 1.695.383.328.656.82.656 1.367 0 .137-.027.247-.054.356a1.72 1.72 0 0 1 .628 1.914c.301.328.52.766.52 1.23 0 .985-.793 1.75-1.75 1.75H9.707q.205.451.328.903l.164.547c.301 1.039-.3 2.133-1.367 2.433M.875 14.25A.864.864 0 0 1 0 13.375V7.25c0-.465.383-.875.875-.875h1.75a.9.9 0 0 1 .875.875v6.125c0 .492-.41.875-.875.875z' />
    </g>
    <defs>
      <clipPath id='06b6b28cc192b16ce4cacae79f042658__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownSmBoldIcon);
export default ForwardRef;
