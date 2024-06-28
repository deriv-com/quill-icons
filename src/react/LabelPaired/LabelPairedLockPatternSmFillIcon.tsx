import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternSmFillIcon = (
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
      <path d='M2 5.5c0-.957.766-1.75 1.75-1.75.629 0 1.203.355 1.504.875h2.215c.3-.52.875-.875 1.531-.875.629 0 1.203.355 1.504.875h2.215c.3-.52.875-.875 1.531-.875.957 0 1.75.793 1.75 1.75 0 .984-.793 1.75-1.75 1.75-.164 0-.328 0-.465-.055l-3.117 3.117c.055.137.082.301.082.438 0 .984-.793 1.75-1.75 1.75-.164 0-.328 0-.465-.055l-2.68 2.68H7.47c.3-.52.875-.875 1.531-.875.629 0 1.203.355 1.504.875h2.215c.3-.52.875-.875 1.504-.875.984 0 1.75.793 1.75 1.75 0 .984-.766 1.75-1.75 1.75a1.7 1.7 0 0 1-1.504-.875h-2.215c-.3.547-.875.875-1.531.875a1.7 1.7 0 0 1-1.504-.875H5.254c-.3.547-.875.875-1.504.875C2.766 17.75 2 16.984 2 16c0-.957.766-1.75 1.75-1.75.137 0 .3.027.438.082l3.117-3.117a1.3 1.3 0 0 1-.082-.465c0-.957.793-1.75 1.75-1.75.164 0 .328.027.464.082l2.68-2.707h-1.613c-.3.547-.875.875-1.531.875a1.7 1.7 0 0 1-1.504-.875H5.254c-.3.547-.875.875-1.504.875C2.766 7.25 2 6.484 2 5.5m0 5.25c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531 0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0A1.77 1.77 0 0 0 2 10.75m10.5 0c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531 0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504' />
    </g>
    <defs>
      <clipPath id='94fd4c4d142dd346567cef2cbd3294b5__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternSmFillIcon);
export default ForwardRef;
