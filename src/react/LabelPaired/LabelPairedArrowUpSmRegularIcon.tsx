import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.8 4.762 4.813 4.812q.274.3 0 .602-.3.273-.601 0L5.937 6.129v10.308q-.027.411-.437.438-.41-.027-.437-.437V6.127L.987 10.177q-.3.273-.601 0-.274-.3 0-.602l4.812-4.812q.3-.274.602 0' />
    </g>
    <defs>
      <clipPath id='baee888f2f8827ea81c908aeaf2538f1__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpSmRegularIcon);
export default ForwardRef;
