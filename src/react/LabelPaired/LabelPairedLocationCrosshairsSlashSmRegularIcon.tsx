import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashSmRegularIcon = (
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
      <path d='m11.05 14.633.74.574A5.35 5.35 0 0 1 9.437 16v1.313A.45.45 0 0 1 9 17.75a.43.43 0 0 1-.437-.437V16a5.266 5.266 0 0 1-4.813-4.812H2.438A.43.43 0 0 1 2 10.75a.45.45 0 0 1 .438-.437H3.75a6.4 6.4 0 0 1 .273-1.258l.739.601c-.11.356-.137.711-.137 1.094A4.353 4.353 0 0 0 9 15.125c.738 0 1.45-.164 2.05-.492M8.563 5.527v-1.34A.45.45 0 0 1 9 3.75a.47.47 0 0 1 .438.438v1.34a5.26 5.26 0 0 1 4.785 4.785h1.34a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-1.34a4.7 4.7 0 0 1-.274 1.257l-.738-.574c.11-.355.164-.738.164-1.121A4.39 4.39 0 0 0 9 6.375c-.766 0-1.45.191-2.078.52l-.738-.575a5.46 5.46 0 0 1 2.379-.793M9 13.375a2.613 2.613 0 0 1-2.625-2.46l1.504 1.202.027.027 1.532 1.204c-.137.027-.301.027-.438.027M8.535 8.18c.137-.028.3-.055.465-.055 1.395 0 2.516 1.094 2.598 2.488L10.094 9.41l-.028-.027zM.934 3.86l16.652 13.124c.164.137.219.438.055.602a.41.41 0 0 1-.602.082L.414 4.543c-.191-.137-.246-.438-.082-.602.137-.191.438-.246.602-.082' />
    </g>
    <defs>
      <clipPath id='bea9cb26d0c85238d77f55d4253f010c__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashSmRegularIcon);
export default ForwardRef;
