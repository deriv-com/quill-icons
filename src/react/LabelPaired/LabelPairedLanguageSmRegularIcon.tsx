import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageSmRegularIcon = (
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
      <path d='M8.563 6.375H2a.88.88 0 0 0-.875.875v7c0 .492.383.875.875.875h6.563zm.874 0v8.75H16a.88.88 0 0 0 .875-.875v-7A.9.9 0 0 0 16 6.375zm8.313.875v7c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75h14c.957 0 1.75.793 1.75 1.75M5.008 8.426l1.75 4.375c.11.219 0 .465-.246.547-.219.109-.465 0-.547-.246l-.246-.575H3.504l-.246.575c-.082.246-.328.355-.547.246-.246-.082-.356-.328-.246-.547l1.75-4.375a.41.41 0 0 1 .41-.301c.164 0 .328.11.383.3m-.383 1.34-.766 1.859h1.504zm9.188-1.203V9h1.75a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-.137l-.11.328a5.4 5.4 0 0 1-1.203 1.887c.082.055.164.11.274.164l.52.328c.19.11.273.383.136.602a.433.433 0 0 1-.602.136l-.52-.3a6 6 0 0 1-.491-.356c-.22.164-.465.3-.711.438l-.465.246c-.219.109-.492 0-.602-.22-.109-.19 0-.464.192-.573l.492-.246c.137-.055.273-.137.41-.22l-.574-.573c-.164-.192-.164-.465 0-.63.191-.163.465-.163.629 0l.629.63c.465-.438.82-.985 1.066-1.614v-.027h-3.308a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.75v-.437a.45.45 0 0 1 .437-.438.47.47 0 0 1 .438.438' />
    </g>
    <defs>
      <clipPath id='53eb47d6ecb7d7da4379c3fb55334e6e__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageSmRegularIcon);
export default ForwardRef;
