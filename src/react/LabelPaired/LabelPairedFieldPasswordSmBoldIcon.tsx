import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFieldPasswordSmBoldIcon = (
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
      <path d='M2.875 7.031a1.08 1.08 0 0 0-1.094 1.094v5.25c0 .629.465 1.094 1.094 1.094h12.25a1.08 1.08 0 0 0 1.094-1.094v-5.25c0-.602-.492-1.094-1.094-1.094zM.469 8.125a2.41 2.41 0 0 1 2.406-2.406h12.25a2.43 2.43 0 0 1 2.406 2.406v5.25a2.41 2.41 0 0 1-2.406 2.406H2.875a2.39 2.39 0 0 1-2.406-2.406zm11.594 5.469a.63.63 0 0 1-.657-.656V8.561c0-.355.274-.656.656-.656.356 0 .657.301.657.657v4.374c0 .383-.301.657-.656.657M5.719 10.75c0 .41-.219.766-.547.957a1.11 1.11 0 0 1-1.094 0c-.355-.191-.547-.547-.547-.957 0-.383.192-.738.547-.93a1.11 1.11 0 0 1 1.094 0c.328.192.547.547.547.93m2.625 0c0 .41-.219.766-.547.957a1.11 1.11 0 0 1-1.094 0c-.355-.191-.547-.547-.547-.957 0-.383.192-.738.547-.93a1.11 1.11 0 0 1 1.094 0c.328.192.547.547.547.93m2.625 0c0 .41-.219.766-.547.957a1.11 1.11 0 0 1-1.094 0c-.355-.191-.547-.547-.547-.957 0-.383.192-.738.547-.93a1.11 1.11 0 0 1 1.094 0c.328.192.547.547.547.93' />
    </g>
    <defs>
      <clipPath id='c0ff8707e80a55ab7cedc16a031bdda6__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFieldPasswordSmBoldIcon);
export default ForwardRef;
