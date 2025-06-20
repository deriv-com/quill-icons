import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.5A.88.88 0 0 0 1 6.375v8.75c0 .492.383.875.875.875h12.25a.88.88 0 0 0 .875-.875v-8.75a.9.9 0 0 0-.875-.875zm-1.75.875c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zm5.852 2.023 1.968 4.375c.11.22 0 .465-.218.575-.22.109-.465 0-.575-.22L6.88 12.5H4.28l-.273.629c-.11.219-.356.328-.574.219-.22-.11-.329-.356-.22-.575l1.97-4.375a.41.41 0 0 1 .382-.273c.192 0 .329.11.41.273m-.383 1.23-.903 1.997H6.47zm4.812.684c-.41 0-.765.22-.957.547a1.11 1.11 0 0 0 0 1.094c.192.356.547.547.957.547.383 0 .739-.191.93-.547a1.11 1.11 0 0 0 0-1.094 1.09 1.09 0 0 0-.93-.546m1.094-.519v-1.23a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v4.374a.45.45 0 0 1-.437.438.44.44 0 0 1-.438-.328 1.9 1.9 0 0 1-1.094.328 1.96 1.96 0 0 1-1.969-1.969c0-1.066.876-1.969 1.97-1.969.382 0 .765.137 1.093.356' />
    </g>
    <defs>
      <clipPath id='33af8abe1ce1a28706eecd029d2c5592__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdSmRegularIcon);
export default ForwardRef;
