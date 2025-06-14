import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveSmBoldIcon = (
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
      <path d='M7 5.063c-2.05 0-3.91 1.093-4.95 2.843a5.71 5.71 0 0 0 0 5.688A5.7 5.7 0 0 0 7 16.438a5.68 5.68 0 0 0 4.922-2.844 5.71 5.71 0 0 0 0-5.688C10.882 6.156 9.023 5.063 7 5.063M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M5.688 7.25H8.53c.356 0 .656.3.656.656 0 .383-.3.657-.656.657H6.234l-.218 1.175 1.668.192c1.093.136 1.941 1.066 1.941 2.16a2.194 2.194 0 0 1-2.187 2.187h-.985c-.738 0-1.45-.382-1.86-1.011l-.109-.164a.63.63 0 0 1 .164-.903c.301-.219.711-.136.903.164l.136.164a.88.88 0 0 0 .766.41h.984a.86.86 0 0 0 .875-.847.857.857 0 0 0-.765-.848l-2.379-.273a.6.6 0 0 1-.465-.246c-.11-.164-.137-.328-.11-.52l.438-2.406a.675.675 0 0 1 .657-.547' />
    </g>
    <defs>
      <clipPath id='61852228a3c507dd25a27211f507cc84__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveSmBoldIcon);
export default ForwardRef;
