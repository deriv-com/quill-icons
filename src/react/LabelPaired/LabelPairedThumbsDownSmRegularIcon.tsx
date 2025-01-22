import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownSmRegularIcon = (
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
      <path d='M7.875 15.535c.11.356.465.547.82.465a.684.684 0 0 0 .465-.82l-.137-.438a5 5 0 0 0-.683-1.558.42.42 0 0 1 0-.438.41.41 0 0 1 .383-.246h3.527a.88.88 0 0 0 .875-.875c0-.3-.164-.574-.41-.738-.192-.11-.274-.383-.164-.575a.83.83 0 0 0 .136-.437.84.84 0 0 0-.492-.766.42.42 0 0 1-.218-.3.42.42 0 0 1 .082-.356c.109-.164.191-.328.191-.547a.89.89 0 0 0-.602-.82c-.218-.082-.355-.3-.3-.52 0-.054.027-.109.027-.191A.9.9 0 0 0 10.5 5.5H8.04c-.438 0-.849.137-1.204.383l-1.066.71a2.1 2.1 0 0 0-.602.602.42.42 0 0 1-.602.137.42.42 0 0 1-.136-.602 2.9 2.9 0 0 1 .847-.875l1.067-.71a3.1 3.1 0 0 1 1.695-.52H10.5c.957 0 1.75.793 1.75 1.75v.027c.52.301.875.875.875 1.504 0 .246-.055.492-.137.684.328.328.575.793.575 1.285 0 .191-.028.355-.083.52.301.328.52.765.52 1.23 0 .984-.793 1.75-1.75 1.75H9.46c.165.383.302.738.411 1.121l.137.465c.219.82-.274 1.64-1.094 1.887-.82.218-1.64-.274-1.887-1.094l-.109-.438a3.74 3.74 0 0 0-1.586-2.16l-.082-.054.219-.356-.219.356a3.1 3.1 0 0 1-.82-.766.466.466 0 0 1 .11-.629.437.437 0 0 1 .6.11c.165.218.356.41.575.546l.082.055a4.6 4.6 0 0 1 1.969 2.652zm-7-2.16h1.75V7.25H.875zm-.875 0V7.25c0-.465.383-.875.875-.875h1.75a.9.9 0 0 1 .875.875v6.125c0 .492-.41.875-.875.875H.875A.864.864 0 0 1 0 13.375' />
    </g>
    <defs>
      <clipPath id='86992805e14a549db65ac80174524f02__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownSmRegularIcon);
export default ForwardRef;
