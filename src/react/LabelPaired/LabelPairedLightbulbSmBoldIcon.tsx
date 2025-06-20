import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbSmBoldIcon = (
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
      <path d='M8.371 10.559c.383-.547.629-1.23.629-1.996 0-1.915-1.586-3.5-3.5-3.5a3.507 3.507 0 0 0-3.5 3.5c0 .765.219 1.449.602 1.996.109.164.218.328.355.492.356.492.766 1.066 1.094 1.64.273.52.437 1.067.492 1.559H3.23c-.082-.328-.164-.629-.328-.93a12 12 0 0 0-.957-1.422l-.41-.574a4.8 4.8 0 0 1-.847-2.761A4.8 4.8 0 0 1 5.5 3.75a4.82 4.82 0 0 1 4.813 4.813c0 1.039-.329 1.968-.876 2.761l-.41.574c-.355.465-.683.93-.957 1.422-.164.301-.246.602-.328.93H6.43c.082-.492.218-1.04.492-1.559.328-.574.738-1.148 1.094-1.64.136-.164.246-.328.355-.492M5.5 7.25c-.738 0-1.312.602-1.312 1.313A.45.45 0 0 1 3.75 9a.43.43 0 0 1-.437-.437c0-1.204.957-2.188 2.187-2.188a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437m0 10.5a2.16 2.16 0 0 1-2.187-2.187v-.438h4.374v.438c0 1.23-.984 2.187-2.187 2.187' />
    </g>
    <defs>
      <clipPath id='575a2a629db7523e357765b5c9978535__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbSmBoldIcon);
export default ForwardRef;
