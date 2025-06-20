import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignSmBoldIcon = (
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
      <path d='M5.156 4.406v1.367a20 20 0 0 1 1.942.329.66.66 0 1 1-.301 1.285c-.848-.192-2.078-.438-3.117-.328q-.78.04-1.23.328a1.26 1.26 0 0 0-.548.847c-.082.301-.027.52.055.657.055.164.219.3.465.464.52.329 1.312.52 2.215.766l.082.027c.847.22 1.804.465 2.543.903.383.219.71.547.93.984.245.438.273.957.19 1.504-.19.984-.902 1.613-1.777 1.941-.437.165-.93.274-1.449.301v1.313c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-1.34c-.11-.027-.192-.027-.274-.055-.683-.082-1.886-.355-2.625-.683-.328-.164-.492-.547-.328-.875.137-.328.52-.465.848-.328.601.246 1.668.519 2.27.601.984.137 1.804.055 2.406-.164.574-.219.875-.547.93-.957.081-.3.027-.52-.055-.656-.055-.164-.22-.328-.465-.465-.52-.328-1.285-.547-2.215-.766l-.082-.027c-.848-.219-1.805-.465-2.543-.902C1.355 10.23 1 9.93.78 9.492.562 9.027.508 8.535.617 7.988c.137-.793.547-1.34 1.121-1.695.547-.356 1.203-.492 1.832-.547.082-.027.164-.027.274-.027V4.406c0-.355.273-.656.656-.656.355 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='5a8d03379a66bd9f281e17f488773442__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignSmBoldIcon);
export default ForwardRef;
