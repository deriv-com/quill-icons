import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignSmBoldIcon = (
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
      <path d='M2.75 8.125v1.75h3.719c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H2.75v1.75c0 .684-.191 1.368-.52 1.997l-.355.629h6.344c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H.78c-.246 0-.465-.11-.574-.3-.11-.22-.137-.466-.027-.657l.902-1.613c.219-.438.355-.903.355-1.367v-1.75H.782a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656h.657v-1.75c0-1.941 1.558-3.5 3.472-3.5.356 0 .738.082 1.094.191l2.187.739c.356.11.547.465.41.82-.109.355-.464.52-.82.41l-2.187-.71a2 2 0 0 0-.684-.138c-1.203 0-2.16.985-2.16 2.188' />
    </g>
    <defs>
      <clipPath id='e246e2cf3097c357f1a929f794d6c27c__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignSmBoldIcon);
export default ForwardRef;
