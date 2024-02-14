import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateSmBoldIcon = (
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
      <path d='M12.25 16.438q.41-.028.438-.438V8.125H10.5a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.063H5.25q-.41.027-.437.437v1.86a1.5 1.5 0 0 0-1.122 0l-.164.054q0 .027-.027.027V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.54q.71 0 1.23.52l2.46 2.46q.52.52.52 1.258V16q-.027.738-.52 1.23-.492.493-1.23.52H6.043q.082-.22.082-.437v-.875zM2.98 8.18l.438.164q.083.027.164 0l.438-.164q.465-.165.765.191l.3.383a.34.34 0 0 0 .138.082l.465.055q.465.082.546.547l.082.464q0 .083.082.164l.356.274q.356.329.219.765l-.192.438a.25.25 0 0 0 0 .164l.164.438q.165.436-.191.765l-.383.274a.35.35 0 0 0-.082.164l-.055.464q-.082.465-.546.547l-.438.055v2.899a.43.43 0 0 1-.219.382.47.47 0 0 1-.465-.027L3.5 16.957l-1.066.711a.42.42 0 0 1-.438.027q-.246-.135-.246-.383v-2.898l-.437-.055q-.465-.082-.547-.546l-.055-.465a.35.35 0 0 0-.082-.164l-.383-.274q-.355-.328-.191-.765l.164-.438a.25.25 0 0 0 0-.164l-.164-.437q-.165-.438.191-.766l.383-.274a.35.35 0 0 0 .082-.164l.055-.464q.082-.465.574-.547l.437-.055a.35.35 0 0 0 .164-.082l.274-.383q.328-.355.765-.191m-1.23 3.445q.027.985.875 1.504.875.492 1.75 0 .848-.52.875-1.504-.027-.985-.875-1.504-.875-.492-1.75 0-.848.52-.875 1.504' />
    </g>
    <defs>
      <clipPath id='d728ecad204562c29b321fc0d8a7185f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateSmBoldIcon);
export default ForwardRef;
