import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightSmFillIcon = (
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
      <path d='M12.172 8.973a.666.666 0 0 1 .328.902l-2.05 4.348c-.083.136 0 .3.109.355.164.055.3 0 .382-.137l.383-.847c.028.027.055.082.082.11l.164.382c.137.3.137.629 0 .93l-.273.574a2.14 2.14 0 0 1-1.45 1.203l-.109.027c-.601.164-1.258.082-1.832-.191l-1.832-.875c-1.094-.492-1.558-1.805-1.039-2.899l.711-1.476a.83.83 0 0 1 1.094-.41c.191.11.328.273.41.465a.78.78 0 0 1 1.04-.356c.218.082.327.246.41.438a.845.845 0 0 1 1.066-.356c.191.11.328.246.41.438L11.27 9.3c.136-.328.546-.492.902-.328m-1.75 1.148.465-.957c.246-.52.902-.766 1.449-.52.547.274.766.93.52 1.477l-.41.848a1.76 1.76 0 0 0 1.257-1.696c0-.957-.765-1.75-1.75-1.75-.957 0-1.75.793-1.75 1.75 0 .301.082.602.219.848m4.156-5.496c-.273 0-.52.246-.52.547v11.183c0 .301.247.52.52.52.3 0 .547-.219.547-.52V5.172c0-.3-.246-.547-.547-.547' />
    </g>
    <defs>
      <clipPath id='af4670895109e01e1024d36433db7b9b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightSmFillIcon);
export default ForwardRef;
