import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarSmBoldIcon = (
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
      <path d='M9.438 16V8.125H7.25a.864.864 0 0 1-.875-.875V5.063H2a.45.45 0 0 0-.437.437V16c0 .246.19.438.437.438h7A.45.45 0 0 0 9.438 16M.25 5.5c0-.957.766-1.75 1.75-1.75h4.512c.465 0 .902.191 1.23.52l2.488 2.488c.329.328.52.765.52 1.23V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75zM5.5 9.656c.3 0 .547.246.547.547v.274c.191.027.383.082.547.109.3.082.492.383.41.656a.524.524 0 0 1-.656.41c-.301-.054-.602-.109-.875-.109a1.1 1.1 0 0 0-.602.11c-.137.081-.137.136-.137.163 0 .028.028.055.11.11.164.082.437.164.793.246.3.082.71.191 1.011.383.329.191.684.52.684 1.066.027.574-.3.957-.684 1.149-.191.109-.41.19-.628.218v.274c0 .3-.247.547-.547.547a.55.55 0 0 1-.547-.547v-.301c-.274-.055-.52-.137-.739-.191-.054-.028-.109-.028-.164-.055a.547.547 0 0 1-.382-.684c.082-.3.41-.465.683-.355.082 0 .137.027.192.054.382.11.683.192.984.192.246.027.465-.027.629-.11.11-.054.137-.109.137-.19 0 0 0-.056-.137-.138a4.6 4.6 0 0 0-.793-.246l-.027-.027c-.301-.082-.684-.191-.985-.328-.328-.192-.683-.52-.683-1.067-.028-.574.355-.93.71-1.12.192-.11.383-.165.602-.22v-.273c0-.3.246-.547.547-.547M2.875 6.375h2.188a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.875a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438m0 1.75h2.188a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.875a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438' />
    </g>
    <defs>
      <clipPath id='3e54798a2b07d2e6b3ca52eded6fdd36__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarSmBoldIcon);
export default ForwardRef;
