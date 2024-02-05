import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightSmBoldIcon = (
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
      <path d='M8.438 8.016q-.056 1.586-1.176 2.57.738.464 1.176 1.203.437.766.437 1.695-.027 1.45-.984 2.407t-2.407.984H3.516q-1.45-.027-2.407-.984t-.984-2.407q0-.93.438-1.695a3.53 3.53 0 0 1 1.175-1.203Q.618 9.602.563 8.016q.027-1.45.984-2.407t2.406-.984h1.094q1.449.027 2.406.984t.984 2.407m-3.391 3.39H3.516q-.876.027-1.477.602-.574.6-.602 1.476.029.876.602 1.477.601.574 1.477.601h1.968q.876-.027 1.477-.601.574-.601.601-1.477-.027-.875-.601-1.476-.601-.574-1.477-.602zm0-1.312q.874-.027 1.476-.602.575-.6.602-1.476-.027-.876-.602-1.477-.6-.574-1.476-.601H3.953q-.875.027-1.476.601-.575.601-.602 1.477.027.874.602 1.476.6.574 1.476.602z' />
    </g>
    <defs>
      <clipPath id='514120db7d41a5d29dcca265742f7b7a__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightSmBoldIcon);
export default ForwardRef;
