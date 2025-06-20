import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationSmBoldIcon = (
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
      <path d='M2.465 7.086h2.762q.739 0 1.312.246c.41.137.738.383 1.04.684.273.3.491.683.628 1.148.164.465.246.984.246 1.586 0 .629-.082 1.148-.246 1.613a2.9 2.9 0 0 1-.629 1.149c-.3.3-.629.52-1.039.683q-.574.246-1.312.246H2.465zm2.762 5.934c.464 0 .847-.137 1.12-.41.274-.274.41-.684.41-1.286v-1.12c0-.602-.136-1.013-.41-1.286s-.656-.41-1.12-.41H4.05v4.512zm7.52 1.53c-.493 0-.958-.081-1.34-.218a2.7 2.7 0 0 1-1.012-.71c-.301-.329-.52-.712-.657-1.177q-.246-.697-.246-1.64c0-.602.082-1.149.246-1.614a2.96 2.96 0 0 1 .657-1.23 2.5 2.5 0 0 1 1.011-.738c.383-.164.848-.246 1.34-.246.684 0 1.23.136 1.668.41q.697.41 1.066 1.312l-1.367.711c-.11-.3-.246-.547-.465-.738-.191-.192-.492-.274-.902-.274-.465 0-.848.137-1.121.465-.3.301-.437.739-.437 1.313v1.176c0 .574.136 1.011.437 1.34.273.3.656.437 1.121.437.383 0 .711-.11.93-.3a1.9 1.9 0 0 0 .52-.794l1.312.766c-.274.547-.63.984-1.094 1.312-.437.301-.984.438-1.668.438' />
    </g>
    <defs>
      <clipPath id='35d9cfd5a5ffdff81b1881425a24c65c__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationSmBoldIcon);
export default ForwardRef;
