import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignSmRegularIcon = (
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
      <path d='M4.938 4.188v1.34c.847.081 1.695.245 2.269.41a.42.42 0 0 1 .328.519.42.42 0 0 1-.52.328c-.902-.219-2.242-.492-3.39-.383-.574.055-1.094.192-1.45.41-.355.247-.6.575-.71 1.122-.082.382-.028.683.082.902.11.246.3.437.601.629.602.383 1.477.601 2.461.875h.028c.93.246 1.941.52 2.68.984.382.246.71.547.902.957q.328.657.164 1.477c-.192.93-.848 1.558-1.723 1.914-.492.191-1.094.3-1.723.328v1.313a.43.43 0 0 1-.437.437.43.43 0 0 1-.437-.437v-1.34c-.165-.028-.356-.028-.52-.055-.711-.11-1.805-.355-2.734-.766-.22-.082-.301-.355-.22-.574.11-.219.356-.328.575-.219.82.356 1.832.575 2.488.684 1.067.164 1.996.082 2.68-.191.684-.274 1.066-.684 1.176-1.258.082-.41.027-.684-.082-.93a1.4 1.4 0 0 0-.602-.601c-.601-.383-1.476-.63-2.433-.876l-.055-.027c-.93-.219-1.941-.492-2.652-.957a2.7 2.7 0 0 1-.93-.984Q.467 8.603.59 7.742c.164-.765.547-1.285 1.094-1.668.546-.328 1.203-.492 1.859-.547.164-.027.328-.027.52-.027V4.188A.45.45 0 0 1 4.5 3.75a.47.47 0 0 1 .438.438' />
    </g>
    <defs>
      <clipPath id='c89e73ac218a88cd0dbcbc7818b3d776__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignSmRegularIcon);
export default ForwardRef;
