import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordSmFillIcon = (
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
      <path d='M2.875 7.25A.88.88 0 0 0 2 8.125v5.25c0 .492.383.875.875.875h12.25a.88.88 0 0 0 .875-.875v-5.25a.9.9 0 0 0-.875-.875zM.25 8.125A2.626 2.626 0 0 1 2.875 5.5h12.25a2.626 2.626 0 0 1 2.625 2.625v5.25A2.626 2.626 0 0 1 15.125 16H2.875A2.626 2.626 0 0 1 .25 13.375zm11.813 5.469a.63.63 0 0 1-.657-.656V8.561c0-.355.274-.656.656-.656.356 0 .657.301.657.657v4.374c0 .383-.301.657-.656.657M5.719 10.75c0 .41-.219.766-.547.957a1.11 1.11 0 0 1-1.094 0c-.355-.191-.547-.547-.547-.957 0-.383.192-.738.547-.93a1.11 1.11 0 0 1 1.094 0c.328.192.547.547.547.93m2.625 0c0 .41-.219.766-.547.957a1.11 1.11 0 0 1-1.094 0c-.355-.191-.547-.547-.547-.957 0-.383.192-.738.547-.93a1.11 1.11 0 0 1 1.094 0c.328.192.547.547.547.93m2.625 0c0 .41-.219.766-.547.957a1.11 1.11 0 0 1-1.094 0c-.355-.191-.547-.547-.547-.957 0-.383.192-.738.547-.93a1.11 1.11 0 0 1 1.094 0c.328.192.547.547.547.93' />
    </g>
    <defs>
      <clipPath id='26b570b3dae3bc197199c8169c0c3361__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordSmFillIcon);
export default ForwardRef;
